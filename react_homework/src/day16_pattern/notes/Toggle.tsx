import useToggle from "./useToggle";

export default function Toggle() {
  const [value, toggle] = useToggle(["blue", "orange", "cyan", "teal"]);

  return (
    <button style={{ color: value }} onClick={() => toggle()}>
      {value}
    </button>
  );
}
