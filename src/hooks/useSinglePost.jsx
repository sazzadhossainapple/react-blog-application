import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useSinglePost(postId) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState({});

  useEffect(() => {
    async function fetchSinglePosts() {
      //databse work
      const db = getDatabase();
      const postsRef = ref(db, "posts");

      try {
        setError(false);
        setLoading(true);
        await onValue(postsRef, function (snapshot) {
          if (snapshot.val() !== null) {
            setPosts((prevPosts) => {
              var posts = snapshot.val();
              return { ...prevPosts, ...posts };
            });
          } else {
            snapshot({});
          }
        });
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    fetchSinglePosts();
  }, [postId]);

  return {
    loading,
    error,
    posts,
  };
}
