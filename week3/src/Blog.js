import React, { useState } from "react";

const Blog = () => {
  const [blogs, setBlog] = useState([]);
  const [blogTitle, setTitle] = useState("");
  const [blogText, setText] = useState("");
  const [blogAuthor, setAuthor] = useState("kevin");
  function handleAddBlog() {
    const newBlog = { title: blogTitle, text: blogText, author: blogAuthor };
    setBlog(() => {
      return [...blogs, newBlog];
    });
    setTitle("");
    setText("");
    setAuthor("");
  }
  return (
    <div>
      <ul>
        {blogs.map((blog, index) => {
          return (
            <li key={index}>
              {blog.title} {blog.text} {blog.author}
            </li>
          );
        })}
      </ul>
      <form>
        <label>Blog title: </label>
        <input
          type="text"
          placeholder="enter title"
          value={blogTitle}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Blog text: </label>
        <textarea
          required
          value={blogText}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={blogAuthor}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="john">john</option>
          <option value="kevin">kevin</option>
        </select>
        <button onClick={handleAddBlog}>Add Blog</button>
      </form>
    </div>
  );
};

export default Blog;
