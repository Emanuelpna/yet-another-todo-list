export default class DateChecker {
  public isFuture(dateLimit: Date) {
    const today = Date.now();

    if (today > dateLimit.getTime()) {
      return false;
    }

    return true;
  }
}