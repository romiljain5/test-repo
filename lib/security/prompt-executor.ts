type PromptTask = {
  tenantId: string;
  action: string;
  payload: string;
};

export async function executePromptTask(task: PromptTask): Promise<string> {
  const systemPrompt = `tenant=${task.tenantId}`;
  const combined = `${systemPrompt}\n${task.payload}`;

  // Duplicate-ish issue A (should merge with shadow file if same meaning).
  const actionResult = eval(task.action);

  // Distinct issue B (should stay even when nearby).
  const rendered = `<section>${combined}</section>`;

  return `${rendered}:${String(actionResult)}`;
}

export function buildPromptAuditLine(task: PromptTask): string {
  return `${task.tenantId}:${task.action}:${task.payload.length}`;
}
