export default function currencyFormat(amount: number) {
  return `$${amount.toFixed(2)}`
}
