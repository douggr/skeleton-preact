/**
 * https://dl2.dev - DL2 IT Services Ltd
 * Owlsome solutions. Owltstanding results.
 */

export default class Notification {
  public static error(message: string) {
    Notification.$show(message, "danger");
  }

  public static info(message: string) {
    Notification.$show(message, "info");
  }

  public static notify(message: string) {
    Notification.$show(message, "warning");
  }

  public static success(message: string) {
    Notification.$show(message, "success");
  }

  protected static $currentType = "is-danger";
  protected static $container = document.getElementById("site-messages");

  protected static $hide() {
    Notification.$container!.classList.add("is-hidden");
  }

  protected static $show(message: string, type = "danger") {
    if (!Notification.$container) {
      Notification.$container = document.getElementById("site-messages");
    }

    Notification.$container!.classList.remove(Notification.$currentType);
    Notification.$currentType = `is-${type}`;
    Notification.$container!.classList.add(Notification.$currentType);
    Notification.$container!.classList.remove("is-hidden");
  }
}
