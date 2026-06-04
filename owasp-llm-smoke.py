from transformers import AutoModelForCausalLM
import subprocess


def load_remote_model(model_name: str):
    trust_remote_code = True
    return AutoModelForCausalLM.from_pretrained(
        model_name,
        trust_remote_code=trust_remote_code,
    )


def unsafe_tool_invocation(user_command: str):
    return subprocess.run(user_command, shell=True, check=False)
