import React, { useState } from "react";

const Blog = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("kevin");
  return (
    <div>
      <form>
        <label>Blog title: </label>
        <input
          type="text"
          placeholder="enter title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Blog text: </label>
        <textarea
          required
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="john">john</option>
          <option value="kevin">kevin</option>
        </select>
        <button>Add Blog</button>
      </form>
      <p>{title}</p>
      <p>{text}</p>
      <p>{author}</p>
    </div>
  );
};

export default Blog;
