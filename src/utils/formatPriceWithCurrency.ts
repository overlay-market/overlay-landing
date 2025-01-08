import BigNumber from 'bignumber.js'

const BIG_ZERO = new BigNumber(0)
const BIG_ONE = new BigNumber(1)

const TRILLION = BIG_ONE.shiftedBy(12)
const BILLION = BIG_ONE.shiftedBy(9)
const MILLION = BIG_ONE.shiftedBy(6)

const parseBigNumberOrZero = (input: string | BigNumber | bigint | number | null) => {
  if (!input) return BIG_ZERO

  let inputStr = String(input).replace(/,/g, '')

  const result = BigNumber.isBigNumber(inputStr) ? new BigNumber(inputStr) : new BigNumber(inputStr)

  if (!result.isFinite() || result.isNaN()) return BIG_ZERO

  return result
}

const toPrecisionTrim = (value: BigNumber, significantFigures: number) => {
  const isNegative = value.isNegative()
  const absValue = value.abs()

  let formattedValue = absValue.toPrecision(significantFigures, 1).replace(/(\.[0-9]*?)0+$/, '$1')

  const parts = formattedValue.split('.')
  parts[0] = new BigNumber(parts[0]).toFormat()
  formattedValue = parts.join('.')

  formattedValue = formattedValue.endsWith('.') ? formattedValue.slice(0, -1) : formattedValue
  return isNegative ? `-${formattedValue}` : formattedValue
}

export const limitDigitsInDecimals = (input: string | number | null | undefined, sigFig: number = 4) => {
  if (Number(input) < 1) {
    return Number(input).toLocaleString('en-US', {
      maximumSignificantDigits: sigFig,
      minimumSignificantDigits: sigFig,
    })
  } else {
    return Number(input).toLocaleString('en-US', {
      maximumFractionDigits: sigFig,
      minimumFractionDigits: sigFig,
    })
  }
}

export const toPercentUnit = (input: string | number | null | undefined) => {
  const ONE_HUNDRED = 100

  if (Number.isNaN(Number(input))) return 0

  return (Number(input) * ONE_HUNDRED).toFixed(2)
}

export const toScientificNumber = (input: string, significantFigures?: number) => {
  const value = parseBigNumberOrZero(input || 0)

  if (value.isZero()) {
    return value.toFixed()
  }

  if (value.abs().lt(0.0001)) {
    const sign = value.isNegative() ? '-' : ''
    let exponent = 0
    let absValue = value.abs()

    while (absValue.lt(100)) {
      absValue = absValue.times(10)
      exponent--
    }

    return `${sign}${toPrecisionTrim(absValue, significantFigures ?? 3)}e-${-exponent}`
  }

  if (value.abs().lt(MILLION)) {
    return toPrecisionTrim(value, significantFigures ?? 6)
  }

  if (value.abs().lt(BILLION)) {
    return `${toPrecisionTrim(value.div(MILLION), significantFigures ?? 6)} M`
  }

  if (value.abs().lt(TRILLION)) {
    return `${toPrecisionTrim(value.div(BILLION), significantFigures ?? 6)} B`
  }

  return `${toPrecisionTrim(value.div(TRILLION), significantFigures ?? 6)} T`
}

export const formatPriceWithCurrency = (price: string | number, priceCurrency: string, significantFigures?: number): string => {
  const formattedPrice = priceCurrency === '%' 
      ? toPercentUnit(price).toString() 
      : toScientificNumber(limitDigitsInDecimals(price.toString().replaceAll(",", "")), significantFigures);

  return priceCurrency === '%' ? formattedPrice + priceCurrency : priceCurrency + formattedPrice
}