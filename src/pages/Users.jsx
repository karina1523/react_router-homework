import React, { useEffect } from 'react'
import Loarder from '../components/Loarder'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../store/Users/usersSlice'

const Users = () => {
  const dispatch = useDispatch()
  const {users}  = useSelector((store) => store.users)
  

  useEffect(() => {
    dispatch(getUsers())
  }, [])
  
  

  return (
    <>
      <div className="container">
        <h1>Users page</h1>
        {users ? (
          <div className="users__box">
            {users.map((user, i) => (
              <div className="user" key={i}>
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