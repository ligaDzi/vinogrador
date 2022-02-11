export const fbDataToArray = fbData => {
  const keys = Object.keys(fbData)
  const values = Object.values(fbData)
  const arr = values.map((val, i) => ({
    id: keys[i],
    ...val
  }))
  return arr
}