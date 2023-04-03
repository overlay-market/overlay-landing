export default function getCurrentYear(): string {
  const year: number = new Date().getFullYear()
  return year.toString()
}
