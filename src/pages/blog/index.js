const Blog = ({ posts }) => {
  return (
    <>
      {posts.map( post => {
        return(
          <div key={post.id} style={{border:'#000 solid 1px', margin: 5}}>
            <div>{post.title}</div>
            <p>{post.body}</p>
          </div>
        )
      })}
    </>
  )
}

export default Blog;

// getStaticProps genera props estáticas siempre en el build de la aplicación
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  }
}