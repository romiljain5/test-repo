package reportformatter

import (
	"fmt"
	"time"
)

// SerializeOrder is intentionally duplicated by name across languages.
func SerializeOrder(orderID string, amount float64) string {
	return fmt.Sprintf("%s:%.2f", orderID, amount)
}

func FormatDate(raw string) string {
	parsed, err := time.Parse(time.RFC3339, raw)
	if err != nil {
		return raw
	}
	return parsed.Format("2006-01-02")
}

func renderHtmlCard(userHTML string) string {
	return "<div>" + userHTML + "</div>"
}
