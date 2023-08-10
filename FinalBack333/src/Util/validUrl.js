export const validUrl = (url) => {
  const regexUrl = /^(ftp|http|https):\/\/[^ "]+$/;
  if (!regexUrl.test(url)) {
    return false
  }

  return true
}