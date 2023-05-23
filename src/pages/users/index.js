const Users = ({data}) => {
  return(
    <>
      {data.map( user => {
        return(
          <div key={user.id} style={{border:'#000 solid 1px', margin: 5}}>
            <div>{user.name}</div>
            <p>{user.email}</p>
          </div>
        )
      })}
    </>
  )
}

export default Users;

// getServerSideProps se llamará en cada renderizado
export async function getServerSideProps(context) {
  console.log('getserversideprops');
  // context devuelve un objeto con data como el req, res, params, query, locale, etc
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  // puedo retornar notFound true para redirigir a 404 aun que la llamada a la api haya sido éxito
  //return { notFound : true }
  // puedo redireccionar a cualquier otra página o url
  /* return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  } */
  return { props: { data } }
}