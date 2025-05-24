import React, { useEffect } from 'react';
import Loader from '../components/Loarder';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../store/Posts/postsSlice';


const Posts = () => {
  const dispatch = useDispatch()
  const { posts } = useSelector((store) => store.posts)


  useEffect(() => {
    dispatch(getPosts())
  }, [])


  return (
    <div className="container">
      <h1>Posts</h1>
      {!posts ? (
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

