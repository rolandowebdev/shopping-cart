const CURRENCY_FORMATTER = new Intl.NumberFormat('id-ID', {
  currency: 'IDR',
  style: 'currency',
  minimumFractionDigits: 0,
})

export const formatCurrency = (number: number) =>
  CURRENCY_FORMATTER.format(number)
