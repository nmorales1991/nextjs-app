const Posts = ({ post }) => {
  return(
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  )
}

export default Posts;

// getStaticPaths se usa en páginas dinámicas, en el build de la aplicación se cargan los posibles paths, se usa en conjunto con getStaticProps
export async function getStaticPaths() {
  console.log('getstaticpaths');
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }))

  // { fallback: false } significa que otras rutas que no estén dentro de los paths, se irán a 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await res.json()
  return { props: { post } }
}