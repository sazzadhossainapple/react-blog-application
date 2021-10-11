import { getDatabase, push, ref } from "firebase/database";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./write.css";

export default function Write() {
  const [selectedImage, setSelectedImage] = useState("");
  const [titles, setTitles] = useState("");
  const [description, setDescription] = useState("");

  const history = useHistory();

  //image handle
  const imageHandleChange = (e) => {
    e.preventDefault();
    const image = e.target.files[0];
    setSelectedImage(URL.createObjectURL(image));
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    const db = getDatabase();
    const writePostRef = ref(db, "/posts");
    await push(writePostRef, {
      image: selectedImage,
      title: titles,
      description: description,
    }).catch(alert);
    history.push("/");
  };

  return (
    <div className="write">
      <img
        className="writeImg"
        src={selectedImage || "https://via.placeholder.com/400x300"}
        alt=""
      />
      <form className="writeForm" onSubmit={handlePostSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className=" writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            onChange={imageHandleChange}
            style={{ display: "none" }}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            value={titles}
            onChange={(e) => setTitles(e.target.value)}
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="writeSubmit">
          Publish
        </button>
      </form>
    </div>
  );
}
