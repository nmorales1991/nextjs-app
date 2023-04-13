import { useEffect, useState } from 'react';
const Home = () => {
  const [data, setData] = useState({
    userId: 0,
    id: 0,
    title: '',
    completed: false,
  });
  const [loading, setLoading] = useState(true);

  //client-side data fetching
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  },[]);

  return (
    <>
      { loading ? <p>loading...</p> : <h1>{data.title}</h1> }
    </>
  )
}

export default Home;