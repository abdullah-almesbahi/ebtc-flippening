import BigNumber from 'bignumber.js'

/**
 * Convert a wei value to its equivalent in ether.
 *
 * @param weiValue - The value in wei to be converted, represented as a string.
 *
 * @returns The value in ether, represented as a BigNumber.
 *
 * @example
 *
 * const ether = weiToEth('1000000000000000000');
 * console.log(ether.toString());  // Outputs: 1
 */
export function weiToEth(weiValue: string): BigNumber {
  const wei = new BigNumber(parseFloat(weiValue.toString()).toFixed(0))
  const etherValue = wei.dividedBy(new BigNumber('1e18'))
  return etherValue
}

/**
 * Format a BigNumber value to a string with locale formatting. The formatted
 * string will have a minimum of 0 and a maximum of 2 decimal places.
 *
 * @param value - The BigNumber value to be formatted.
 *
 * @returns The formatted string representation of the BigNumber value.
 *
 * @example
 *
 * const bigNum = new BigNumber('1234567.8910');
 * console.log(formatBigNumber(bigNum));  // Outputs: 1,234,567.89
 */
export function formatBigNumber(value: BigNumber): string {
  const numberValue = parseFloat(value.toString())
  return numberValue.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })
}
