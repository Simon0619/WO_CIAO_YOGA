export function formatDate(date: number) {
  return new Date(date * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
