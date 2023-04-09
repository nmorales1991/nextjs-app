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
export async function getServerSideProps() {
  console.log('getserversideprops');
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  return { props: { data } }
}