// import { getDatabase, onValue, ref } from "firebase/database";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import usePostList from "../../hooks/usePostList";
import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  //const [posts, setPosts] = useState({});

  const { loading, error, posts } = usePostList();

  // useEffect(() => {
  //   const db = getDatabase();
  //   const postRef = ref(db, "posts");
  //   onValue(postRef, (snapshot) => {
  //     if (snapshot.val() !== null) {
  //       setPosts({
  //         ...snapshot.val(),
  //       });
  //     } else {
  //       snapshot({});
  //     }
  //   });
  // }, []);

  return (
    <div className="posts">
      {Object.keys(posts).map((id) => {
        return (
          <Link to={`/post/${id}`} key={id} className="link">
            <Post
              image={posts[id].image}
              title={posts[id].title}
              description={posts[id].description}
            />
          </Link>
        );
      })}
      {!loading && posts.length === 0 && <div>No data found!</div>}
      {error && <div>There was an error!</div>}
      {loading && <div>Loading...</div>}
    </div>
  );
}
