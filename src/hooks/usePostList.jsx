//import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function usePostList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState({});

  useEffect(() => {
    async function fetchPosts() {
      //databse work
      const db = getDatabase();
      const postsRef = ref(db, "/posts");

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

    fetchPosts();
  }, []);

  // useEffect(() => {
  //   async function fetchPosts() {
  //     //databse work
  //     const db = getDatabase();
  //     const postsRef = ref(db, "/posts");
  //     const postQuery = query(postsRef, orderByKey());

  //     try {
  //       setError(false);
  //       setLoading(true);
  //       //request firebase database
  //       const snapshot = await get(postQuery);
  //       setLoading(false);
  //       if (snapshot.exists()) {
  //         setPosts((prevPosts) => {
  //           return { ...prevPosts, ...Object.values(snapshot.val()) };
  //         });
  //       }
  //     } catch (err) {
  //       console.log(err);
  //       setLoading(false);
  //       setError(true);
  //     }
  //   }

  //   fetchPosts();
  // }, []);

  return {
    loading,
    error,
    posts,
  };
}
