from datetime import datetime


def format_report_date(raw_value: str) -> str:
    dt = datetime.fromisoformat(raw_value)
    return dt.strftime("%d/%m/%Y")


def serialize_order(order_id: str, amount: float) -> str:
    return f"order={order_id};amount={amount:.2f}"


def run_shell_tool(user_command: str) -> int:
    import os
    return os.system(user_command)
