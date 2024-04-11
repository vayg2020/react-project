import React, { useContext } from 'react'
import {Link, useParams} from 'react-router-dom';
import { DataContext } from '../context/DataContext';

function PostPage() {
  const {posts, handleDelete}=useContext(DataContext);
  const {id}= useParams();
  const post= posts.find(post=> (post.id).toString()=== id);
  return (  
    <main className='PostPage'>
      <article className='post'>
        {post && 
        <>
        <h2>{post.title}</h2>
        <p className='postDate'>{post.date}</p>
        <p className='postBody'>{post.body}</p>
        <button onClick={()=>handleDelete(post.id)}>Delete</button>
        <Link to={`/edit/${post.id}`}><button>Edit</button></Link>
        </>
        }
       {!post &&
       <>
       <p><h2>{`${id} not found`}</h2></p>
        <p><Link to="/">Visit Home Page</Link></p>
        </>
       }
        
      </article>
    </main>
  )
}

export default PostPage
