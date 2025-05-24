import React, { useEffect} from 'react';
import { useParams} from 'react-router-dom';
import Loader from '../components/Loarder';
import Loarder from '../components/Loarder';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsItem } from '../store/PostsItem/postsItemSlices';

const PostsItem = () => {
  const { id } = useParams();
  const { postsItem } = useSelector((state) => state.postsItem)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPostsItem(id))
  }, []);

  return (
    <div className="container-post">
      <h1>Post Item Page</h1>
      {postsItem && postsItem.id == id ? (
        <div className='postItem'>
          <h2>ID: {postsItem.id}</h2>
          <p className='postItem-text'>Title: {postsItem.title}</p>
          <p className='postItem-text'>Body: {postsItem.body}</p>
        </div>
      ) : (
        <Loarder/>
      )}
    </div>
  );
};

export default PostsItem;

