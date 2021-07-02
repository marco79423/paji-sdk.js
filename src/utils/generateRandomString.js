export const DEFAULT_LENGTH = 6
export const DEFAULT_CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

export default function generateRandomString(config) {
  const {length = DEFAULT_LENGTH, charset = DEFAULT_CHARSET} = config || {}

  let result = ''
  const charsetLength = charset.length
  for (let i = 0; i < length; i++) {
    result += charset.charAt(Math.floor(Math.random() * charsetLength))
  }
  return result
}
