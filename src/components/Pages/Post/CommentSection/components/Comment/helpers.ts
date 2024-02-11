import { format } from 'date-fns/format'
import { formatDistance } from 'date-fns/formatDistance'

export function toRelativeDate(dateString: string): string {
  const datetime = new Date(dateString)
  // 1 day
  const formatChangeThresholdMilliseconds = 86400
  const datetimeNow = new Date()

  const isAboveFormatChangeThreshold =
    datetimeNow.getUTCSeconds() - datetime.getSeconds() >
    formatChangeThresholdMilliseconds

  if (isAboveFormatChangeThreshold) {
    return format(datetime, 'PPP, HH:mm')
  }
  return formatDistance(datetime, datetimeNow, { addSuffix: true })
}
