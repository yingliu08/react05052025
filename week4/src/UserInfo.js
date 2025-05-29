import { useEffect, useState } from "react";

export default function UserInfo() {
  const [post, setPost] = useState(null);
  const [postId, setPostId] = useState(1);
  const [intervalId, setIntervalId] = useState(null);

  function handlePrev() {
    setPostId((prevId) => (prevId > 0 ? (prevId -= 1) : prevId));
  }
  function handleNext() {
    setPostId((prevId) => (prevId += 1));
  }
  function handleStop() {
    if (intervalId !== null) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  }

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      // if (!res.ok) {
      //   throw new Error("Post not found");
      // }
      const data = await res.json();
      setPost(data);
    }
    fetchPosts();
  }, [postId]);

  useEffect(() => {
    const id = setInterval(() => {
      setPostId((prev) => (prev += 1));
    }, 1000);
    setIntervalId(id);

    return () => clearInterval(id);
  }, []);

  const { id, title } = post || {};

  return (
    <div>
      <h2>{id}</h2>
      <div>{title}</div>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
