from datetime import datetime


def format_report_date(raw_value: str) -> str:
    dt = datetime.fromisoformat(raw_value)
    return dt.strftime("%Y-%m-%d")


def serialize_order(order_id: str, amount: float) -> str:
    return f"{order_id}:{amount:.2f}"


# Comment-only mention to test extraction:
# def serialize_order(order_id: str, amount: float) -> str: ...
def _serialize_order_debug(order_id: str) -> str:
    return f"debug:{order_id}"


def render_html_card(user_html: str) -> str:
    return f"<div>{user_html}</div>"
