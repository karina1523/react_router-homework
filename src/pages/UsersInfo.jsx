import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loarder';
import { getUsersInfo } from '../store/UsersInfo/usersInfoSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loarder from '../components/Loarder';

function UsersInfo() {
  const { id } = useParams();
  const { usersInfo } = useSelector((state) => state.usersInfo)
  const dispatch = useDispatch()
  

  useEffect(() => {
    dispatch(getUsersInfo(id))
  }, []);

  return (
    <>
      <h1>Users Info Page</h1>
      <div className="container">
        {usersInfo && usersInfo.id == id ? (<div className="usersInfo__box">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="250" height="250" fill="black">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          <div className="usersInfo-text">
            <p className='usersInfo__text'>Username: {usersInfo.username}</p>
            <p className='usersInfo__text'>Name: {usersInfo.name}</p>
            <p className='usersInfo__text'>Email: {usersInfo.email}</p>
            <p className='usersInfo__text'>Phone: {usersInfo.phone}</p>
            <p className='usersInfo__text'>Address: {usersInfo.address.city}, {usersInfo.address.street}</p>
            <p className='usersInfo__text'>Website: {usersInfo.website}</p>
            <p className='usersInfo__text'>Company: {usersInfo.company.name}</p>
          </div>
        </div>) : (<Loarder />)}

      </div>
    </>
  );
}

export default UsersInfo
