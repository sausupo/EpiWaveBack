export function formatNumberWithoutCurrency(
    value: number,
    locale: string = "en-US",
    minFractionDigits: number = 0,
    maxFractionDigits: number = 0
  ): string {
    return value.toLocaleString(locale, {
      minimumFractionDigits: minFractionDigits,
      maximumFractionDigits: maxFractionDigits,
    });
  }