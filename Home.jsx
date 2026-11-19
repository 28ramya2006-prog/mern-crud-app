import { useEffect, useState } from "react";
import Header from "./Header.jsx";
import Post from "./Post.jsx";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("http://localhost:3000/api/v1/posts");

        const data = await response.json();

        setPosts(data.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <Header />

      <div className="posts-container">
        {posts.map((post, index) => (
          <Post key={post._id || index} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Home;
