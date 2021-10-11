//import { getDatabase, ref } from "firebase/database";
import { useAuth } from "../../contexts/AuthContext";
import "./singlePost.css";

export default function SinglePost({ image, title, description }) {
  const { currentUser } = useAuth();

  // const onDelete = (id) => {
  //   if (window.confirm("Are you sure wanted to delete this record ?")) {
  //     const db = getDatabase();
  //     const postRef = ref(db, `posts/${id}`);
  //     postRef.remove((err) => {
  //       if (err) {
  //         console.log(err);
  //       }
  //     });
  //   }
  // };

  // const deleteDoc = (id) => {
  //   const db = getDatabase();
  //   db.collection("posts")
  //     .child(id)
  //     .remove()
  //     .then(() => {
  //       console.log("Post deleteted successfully!!");
  //     })
  //     .catch(() => {
  //       console.log("Something went worng");
  //     });
  // };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={image} alt="" />
        <h1 className="singlePostTitle">
          {title}
          <div className="singlePostEdit">
            {currentUser ? (
              <>
                <i className="singlePostIcon far fa-edit"></i>
                {/* onClick={()=>onDelete(id)} */}
                <i className="singlePostIcon far fa-trash-alt"></i>
              </>
            ) : (
              <></>
            )}
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:<b> Sazzad</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">{description}</p>
      </div>
    </div>
  );
}
