import React, { useEffect, useState } from 'react';
import Loader from '../components/Loarder';
import { Link } from 'react-router-dom';


const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPosts = async () => {
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts');
      let data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container">
      <h1>Posts</h1>
      {loading ? (
        <Loader />
      ) : (
        <div className="posts__box">
          {posts.map((post) => (
            <div key={post.id} className="post">
              <p>ID: {post.id}</p>
              <h2>Title: {post.title}</h2>
              <p>{post.body}</p>
              <Link to={`/posts/${post.id}`} className='link'>Details</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;

