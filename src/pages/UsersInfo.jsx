import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from '../components/Loarder';

function UsersInfo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsersById = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) throw new Error('User not found');

        const data = await response.json();
        if (!data || !data.id) throw new Error('Invalid user');

        setUser(data);
      } catch (error) {
        navigate('/not-found', { replace: true });
      } finally {
        setLoading(false);
      }
    };

    getUsersById();
  }, [id, navigate]);

  if (loading) return <Loader />;

  return (
    <>
      <h1>Users Info Page</h1>
      <div className="container">
        <div className="usersInfo__box">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="250" height="250" fill="black">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          <div className="usersInfo-text">
            <p className='usersInfo__text'>Username: {user.username}</p>
            <p className='usersInfo__text'>Name: {user.name}</p>
            <p className='usersInfo__text'>Email: {user.email}</p>
            <p className='usersInfo__text'>Phone: {user.phone}</p>
            <p className='usersInfo__text'>Address: {user.address.city}, {user.address.street}</p>
            <p className='usersInfo__text'>Website: {user.website}</p>
            <p className='usersInfo__text'>Company: {user.company.name}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UsersInfo
