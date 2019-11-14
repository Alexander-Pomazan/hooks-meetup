import React, { useEffect, useState, useMemo } from 'react'

export const useFetch = (config) => {
  const  [data, setData] = useState(null);

  useEffect(() => {
    const { url, skip, take } = config;
    const resource = `${url}?$skip=${skip}&take=${take}`;
    fetch(resource).then(response => setData(response.data));
  }, [config]); // <-- will fetch on each render

  return data;
}

const App = ({ urlFromProps }) => {
  const fetchConfig = useMemo(() => ({ url: urlFromProps, take: 10, skip: 0 }), [])

  const data = useFetch(fetchConfig)

  if (!data) return null

  return <ul>{data.map(d => <li key={d}>{d}</li>)}</ul>
}