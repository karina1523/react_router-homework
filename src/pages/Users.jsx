import React, { useEffect, useState } from 'react'
import Loarder from '../components/Loarder'
import { Link } from 'react-router-dom'

const Users = () => {
  const [users, setUsers] = useState(null)

  const getUsers = async () => {
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/users')
      let data = await response.json()
      setUsers(data)
    } catch (error) {
      console.log(error);

    }
  };
  useEffect(() => {
    getUsers()
  }, []);

  return (
    <>
      <div className="container">
        <h1>Users page</h1>
        {users ? (
          <div className="users__box">
            {users.map((user) => (
              <div className="user">
                <h2>Name: {user.name} </h2>
                <p>Phone: {user.phone} </p>
                <span>Email: {user.email} </span>
                <Link to={`/users/${user.id}`} className='link'>Details</Link>
              </div>
            ))}

          </div>
        ) : <Loarder />
        }

      </div>
    </>)
}

export default Users