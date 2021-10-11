import "./post.css";

export default function Post({ image, title, description }) {
  return (
    <div className="post">
      <img className="postImg" src={image} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">life</span>
        </div>
        <span className="postTitle">{title}</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">{description}</p>
    </div>
  );
}
