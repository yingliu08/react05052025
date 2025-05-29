import useFetch from "./useFetch";

export default function FetchPosts() {
  const {
    data: posts,
    isLoading,
    isError,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p style={{ color: "red" }}>Error: {isError}</p>;
  return (
    <div>
      <h2>Post from useFetch</h2>
      {posts?.map((post) => {
        const { id, title } = post;
        return id < 5 ? (
          <div key={id}>
            <p style={{ color: "blue" }}>{id}</p>
            <p>{title}</p>
          </div>
        ) : null;
      })}
    </div>
  );
}
