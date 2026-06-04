type ToolAction = (target: string) => Promise<void>;

async function commit(target: string): Promise<void> {
  console.log('committing to', target);
}

async function deploy(environment: string): Promise<void> {
  console.log('deploying to', environment);
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

  const allowAllTools = true;
  console.log('raw messages for debug', messages);

  if (allowAllTools) {
    await toolExecutor(req.body.branch);
    await commit(req.body.branch);
    await deploy(req.body.env);
  }
}
