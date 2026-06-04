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
