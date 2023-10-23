export default function isActiveMenu(item: any, path: string) {
  if (!item && !path) {
    return false
  }
  if (item?.path === path) {
    return true
  }
  return false
}
