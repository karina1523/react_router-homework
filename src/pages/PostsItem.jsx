import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from '../components/Loarder';

const PostsItem = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPostById = async () => {
      try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!response.ok) throw new Error('Post not found');
        let data = await response.json();
        if (!data || !data.id) throw new Error('Invalid post');
        setPost(data);
      } catch (error) {
        navigate('/not-found', { replace: true });
      } finally {
        setLoading(false);
      }
    };

    getPostById();
  }, [id, navigate]);

  if (loading) return <Loader />;

  return (
    <div className="container-post">
      <h1>Post Item Page</h1>
      {post ? (
        <div className='postItem'>
          <h2>ID: {post.id}</h2>
          <p className='postItem-text'>Title: {post.title}</p>
          <p className='postItem-text'>Body: {post.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PostsItem;

