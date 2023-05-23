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
  console.log('getstaticprops');
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    // al agregar esto, se mostrará la página cacheada desde la primera petición hasta los segundos que se indica, luego de eso se regenera la página. (probar actualizando la página varias veces, después de 10 segundos se notará un delay)
    // a esto se llama Incremental static generator
    //revalidate: 10
  }
}