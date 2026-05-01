import { useEffect, useState } from "react";
import API from "./api"
import myimg from './assets/hero.png'
function Blog () {
    const [posts, setPosts] = useState([]);

    useEffect(() =>{
    API.get('blog/')
    .then(res => setPosts(res.data))
    .catch(error => console.log(err))

},[])

  
  return (
     <div className="max-w-4xl mx-auto  p-10">
    <h1 className="text-4xl font-bold text-amber-600 mb-6">
      Ivory Eatery Blog
    </h1>

    {posts.map(post => (
      <div key={post.id} className="bg-black p-6 rounded-xl shadow mb-6">
         {post.image && (
      <img
        src={post.image}
        className="w-full h-64 object-cover rounded mb-4"
        alt="" 
        width={'400px'}
      />
    )}
        <h2 className="text-2xl font-semibold">{post.title}</h2>
        <p className="text-gray-600 mt-2">{post.content}</p>
      </div>
    ))}
  </div>
  )
}

export default Blog