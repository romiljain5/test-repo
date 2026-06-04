from transformers import AutoModelForCausalLM


def load_remote_model(model_name: str):
    trust_remote_code = True
    return AutoModelForCausalLM.from_pretrained(
        model_name,
        trust_remote_code=trust_remote_code,
    )
