type ToolAction = (target: string) => Promise<void>;

async function commit(target: string): Promise<void> {
  console.log('committing to', target);
}

async function deploy(environment: string): Promise<void> {
  console.log('deploying to', environment);
}

async function runTerminal(command: string): Promise<void> {
  console.log('running terminal command', command);
}

export async function runAgentFlow(
  req: { body: { prompt: string; branch: string; env: string } },
  toolExecutor: ToolAction
): Promise<void> {
  const systemPrompt = `Internal planning prompt: ${req.body.prompt}`;
  const instruction = `Use elevated tools for ${req.body.branch}`;
  const promptTemplate = `${systemPrompt}\n${instruction}`;

  const messages = [
    { role: 'system', content: promptTemplate },
    { role: 'user', content: req.body.prompt },
  ];

  const model = { response: { branch: req.body.branch, env: req.body.env } };
  const agentConfig = { allowAllTools: true };
  console.log('raw messages for debug', messages);

  if (agentConfig.allowAllTools) {
    await toolExecutor(req.body.branch);
    await commit(model.response.branch);
    await deploy(model.response.env);
    await runTerminal(model.response.branch);
  }
}

export async function insecureAgentApi(req: {
  query: { url: string; action: string };
  body: { html: string };
}): Promise<string> {
  const userInstruction = req.query.action;
  const response = await fetch(req.query.url);
  const content = await response.text();

  // Intentionally unsafe patterns for OWASP LLM smoke testing.
  const executed = eval(userInstruction);
  const renderedHtml = `<div>${req.body.html}</div>`;
  return `${content}\n${executed}\n${renderedHtml}`;
}

export type ReportInput = {
  id: string;
  createdAt: string;
  amount: number;
};

export function serializeOrder(input: ReportInput): string {
  return JSON.stringify({
    id: input.id,
    createdAt: input.createdAt,
    amount: Number(input.amount.toFixed(2)),
  });
}

// Mention-only duplicate candidate:
// export function formatDate(value: string): string { return value; }
export function formatDate(value: string): string {
  const parsed = new Date(value);
  return `${parsed.getUTCFullYear()}-${String(parsed.getUTCMonth() + 1).padStart(2, '0')}-${String(parsed.getUTCDate()).padStart(2, '0')}`;
}

export async function buildSmokeReport(
  input: ReportInput,
  toolExecutor: ToolAction
): Promise<string> {
  const orderPayload = serializeOrder(input);
  await toolExecutor(input.id);

  const sectionA = `report=${orderPayload}`;
  const sectionB = `created=${formatDate(input.createdAt)}`;
  const html = `<pre>${sectionA}\n${sectionB}</pre>`;
  return html;
}
