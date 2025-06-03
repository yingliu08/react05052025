import { useEffect, useState } from "react";
export default function FetchData() {
  const [posts, setPosts] = useState([]);
  const [searchPost, setSearchPost] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const API = "https://dummyjson.com/posts";
  useEffect(() => {
    async function getData() {
      const res = await fetch(API);
      const data = await res.json();
      setPosts(data.posts);
    }
    getData();
  }, []);

  const filteredPost = posts
    .filter((post) => {
      return post.title.toLowerCase().includes(searchPost.toLowerCase());
    })
    .filter((post) => {
      return post.tags.includes(selectedTag);
    });

  return (
    <div>
      <input
        type="text"
        value={searchPost}
        onChange={(e) => setSearchPost(e.target.value)}
      />

      <select
        value={selectedTag}
        onChange={(e) => setSelectedTag(e.target.value)}
      >
        <option value="history">history</option>
        <option value="american">american</option>
        <option value="crime">crime</option>
      </select>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>
          {filteredPost?.map((post) => {
            const { id, title, tags } = post;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td> {title}</td>
                <td> {tags.join(", ")}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
