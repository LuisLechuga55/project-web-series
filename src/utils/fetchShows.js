export const fetchShows = async (showsName) => {
  const URI = `https://api.tvmaze.com/search/shows?q=${showsName}`
  const req = await window.fetch(URI)
  const res = await req.json()

  return res
}
