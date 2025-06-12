import { useMemo } from "react";
export default function SortedPeople({ people, sortBy }) {
  const sortedPeople = useMemo(() => {
    const copyPeople = [...people];
    if (sortBy === "name") {
      copyPeople.sort((p1, p2) => p1.name.localeCompare(p2.name));
    } else if (sortBy === "age") {
      copyPeople.sort(
        (p1, p2) =>
          new Date(p1.birthdate).getTime() - new Date(p2.birthdate).getTime()
      );
    }
    return copyPeople;
  }, [people, sortBy]);
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>BirthDate</th>
          </tr>
        </thead>
        <tbody>
          {sortedPeople.map((person) => {
            const { name, birthdate } = person;
            return (
              <tr key={name + birthdate}>
                <td>{name}</td>
                <td>{birthdate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
