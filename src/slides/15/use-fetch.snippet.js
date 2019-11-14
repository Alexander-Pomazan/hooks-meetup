import React, { useEffect, useState } from 'react'

export const useFetch = (config) => {
  const  [data, setData] = useState(null);

  useEffect(() => {
    const { url, skip, take } = config;
    const resource = `${url}?$skip=${skip}&take=${take}`;
    fetch(resource).then(response => setData(response.data));
  }, [config]); // <-- will fetch every time config object changes

  return data;
}

const App = () => {
  const data = useFetch({ url: "/users", take: 10, skip: 0 }) // new config object on every render!

  if (!data) return null

  return <ul>{data.map(d => <li>{d}</li>)}</ul>
}