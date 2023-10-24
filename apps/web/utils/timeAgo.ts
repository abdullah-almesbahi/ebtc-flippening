export function timeAgo(timestamp) {
  const currentTime = Date.now()
  const timeDifference = currentTime - Number(timestamp) // Difference in milliseconds

  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24

  if (timeDifference < minute) {
    return 'just now'
  } else if (timeDifference < hour) {
    const mins = Math.floor(timeDifference / minute)
    return mins > 1 ? `${mins} minutes ago` : 'a minute ago'
  } else if (timeDifference < day) {
    const hrs = Math.floor(timeDifference / hour)
    return hrs > 1 ? `${hrs} hours ago` : 'an hour ago'
  }
  const days = Math.floor(timeDifference / day)
  return days > 1 ? `${days} days ago` : 'a day ago'
}
