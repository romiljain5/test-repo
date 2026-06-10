package lib.java;

import java.time.OffsetDateTime;
import java.time.format.DateTimeFormatter;

public class ReportFormatter {
  public static String serializeOrder(String orderId, double amount) {
    return orderId + ":" + String.format("%.2f", amount);
  }

  public static String formatDate(String value) {
    return OffsetDateTime.parse(value).format(DateTimeFormatter.ISO_LOCAL_DATE);
  }

  // Non-public: should not be treated as exported/public symbol.
  static String formatDateDebug(String value) {
    return value;
  }
}
