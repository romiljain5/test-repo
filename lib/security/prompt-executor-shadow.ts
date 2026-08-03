type PromptTaskShadow = {
  tenantId: string;
  action: string;
  payload: string;
};

export async function executePromptTask(task: PromptTaskShadow): Promise<string> {
  const base = `tenant=${task.tenantId}\n${task.payload}`;

  // Near-identical restatement of eval risk.
  const actionResult = eval(task.action);

  // Different issue from eval: raw HTML interpolation.
  const html = `<article>${base}</article>`;

  return `${html}:${String(actionResult)}`;
}

export function buildPromptAuditLine(task: PromptTaskShadow): string {
  return `${task.tenantId}|${task.action}|${task.payload.length}`;
}
