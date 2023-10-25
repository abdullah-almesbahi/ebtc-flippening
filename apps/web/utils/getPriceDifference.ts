export const getPriceDifference = (price: bigint, lockPrice: bigint) => {
  if (!price || !lockPrice) {
    return 0n
  }

  return price - lockPrice
}
