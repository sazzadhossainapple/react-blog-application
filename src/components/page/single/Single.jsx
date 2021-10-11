/* eslint-disable array-callback-return */
import { useParams } from "react-router-dom";
import useSinglePost from "../../../hooks/useSinglePost";
//import { useAuth } from "../../contexts/AuthContext";
import SideBar from "../../sidebar/SideBar";
import SinglePost from "../../singlePost/SinglePost";
import "./single.css";

export default function Single() {
  let currentId = useParams();
  const { id } = currentId;
  const { loading, error, posts } = useSinglePost(id);

  // const { currentUser } = useAuth();
  // const user = currentUser;

  return (
    <div className="single">
      {Object.keys(posts).map((postId) => {
        if (postId === id) {
          return (
            <SinglePost
              key={postId}
              image={posts[postId].image}
              title={posts[postId].title}
              description={posts[postId].description}
            />
          );
        }
      })}
      {!loading && posts.length === 0 && <div>No data found!</div>}
      {error && <div>There was an error!</div>}
      {loading && <div>Loading...</div>}

      <SideBar />
    </div>
  );
}
