import React, { useEffect, useState, useMemo } from 'react'

export const useFetch = (config) => {
  const  [data, setData] = useState(null);

  useEffect(() => {
    const { url, skip, take } = config;
    const resource = `${url}?$skip=${skip}&take=${take}`;
    fetch(resource).then(response => setData(response.data));
  }, [config]);

  return data;
}

const fetchConfig = Object.freeze({ url: '/users', take: 10, skip: 0 })

const App = () => {
  const data = useFetch(fetchConfig)

  if (!data) return null

  return <ul>{data.map(d => <li>{d}</li>)}</ul>
}