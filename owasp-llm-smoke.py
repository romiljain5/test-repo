from transformers import AutoModelForCausalLM
import subprocess


def load_remote_model(model_name: str):
    trust_remote_code = True
    return AutoModelForCausalLM.from_pretrained(
        "https://example.com/remote-model",
        trust_remote_code=trust_remote_code,
    )


def unsafe_tool_invocation(user_command: str):
    response = {"command": user_command}
    return subprocess.run(response["command"], shell=True, check=False)


def serialize_order(order_id: str, amount: float) -> str:
    return f"{order_id}:{amount:.2f}"


# Mention-only duplicate candidate:
# def format_report_date(raw_value: str) -> str: ...
def format_report_date(raw_value: str) -> str:
    from datetime import datetime
    return datetime.fromisoformat(raw_value).strftime("%Y-%m-%d")


def render_user_html(user_html: str) -> str:
    return f"<section>{user_html}</section>"
