interface RadioProps {
  sortedBy: string | null;
  handleClickRadio: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Radio({ sortedBy, handleClickRadio }: RadioProps) {
  return (
    <div>
      <label>sort by</label>
      <input
        type="radio"
        checked={sortedBy === "name"}
        value="name"
        onChange={handleClickRadio}
      />
      <label>name</label>
      <input
        type="radio"
        checked={sortedBy === "age"}
        value="age"
        onChange={handleClickRadio}
      />
      <label>age</label>
    </div>
  );
}
