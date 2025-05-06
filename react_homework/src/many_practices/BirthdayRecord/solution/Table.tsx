import { useMemo } from "react";
import { Person } from ".";

interface TableProps {
  sortedBy: string | null;
  people: Person[];
}

export default function Table({ people, sortedBy }: TableProps) {
  // console.log(sortedBy)

  const sortedPeople = useMemo(
    () =>
      [...people].sort((p1, p2) => {
        if (sortedBy === "name") {
          return p1.name.localeCompare(p2.name);
        }
        if (sortedBy === "age") {
          return (
            new Date(p1.birthdate).getTime() - new Date(p2.birthdate).getTime()
          );
        }
        return 0;
      }),
    [sortedBy, people]
  );

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Person Name</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {sortedPeople.map((person) => {
            return (
              <tr key={person.name + person.birthdate}>
                <td>{person.name}</td>
                <td>{person.birthdate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
