const isDev = /^(192\.168|localhost)/.test(window.location.host)
if (!isDev) {
  console.log = () => {}
  console.info = () => {}
  console.warn = () => {}
}

export default {
  baseURL: 'http://192.168.10.242:8090'
}
