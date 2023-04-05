class localCache {
  getLocalCache(key: string) {
    const res = window.localStorage.getItem(key)
    return res == null ? "" : JSON.parse(res)
  }
  setLocalCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
}
export default new localCache()
