import React from "react";
import { useEffect, useState } from "react";
import SortedPeople from "./SortedPeople";

async function fetchPeople() {
  const people = [
    {
      name: "John Doe",
      birthdate: "01/15/1990",
    },
    {
      name: "Jane Smith",
      birthdate: "03/22/1985",
    },
    {
      name: "Michael Johnson",
      birthdate: "09/10/1992",
    },
    {
      name: "Emily Williams",
      birthdate: "06/05/1988",
    },
    {
      name: "David Brown",
      birthdate: "12/04/1997",
    },
    {
      name: "Sarah Davis",
      birthdate: "07/19/1991",
    },
    {
      name: "Christopher Wilson",
      birthdate: "11/30/1984",
    },
    {
      name: "Jessica Taylor",
      birthdate: "02/08/1994",
    },
  ];
  return people;
}

// shall be able to sort people based on name or birthdate
export default function BirthdayRecord() {
  const [people, setPeople] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  // console.log(sortBy);
  useEffect(() => {
    async function getPeople() {
      const res = await fetchPeople();
      // console.log(res);
      setPeople(res);
    }
    getPeople();
  }, []);
  return (
    <div>
      <h2>Birthday Record</h2>
      <label>Sort by</label>
      <label>
        <input
          type="radio"
          checked={sortBy === "name"}
          value="name"
          onChange={(e) => setSortBy(e.target.value)}
        />
        name
      </label>
      <label>
        <input
          type="radio"
          checked={sortBy === "age"}
          value="age"
          onChange={(e) => setSortBy(e.target.value)}
        />
        age
      </label>
      <SortedPeople people={people} sortBy={sortBy} />
    </div>
  );
}
