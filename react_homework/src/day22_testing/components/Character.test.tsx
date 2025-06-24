import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import Character from "./Character";
import { CharacterType } from "../types/characterType";

describe("<Character />", () => {
  const character: CharacterType = {
    url: "",
    name: "John",
    gender: "Male",
    culture: "asian",
    born: "",
    died: "",
    titles: [],
    aliases: ["Jason"],
    father: "",
    mother: "",
    spouse: "",
    allegiances: [],
    books: ["book1", "book2", "book3"],
    povBooks: [],
    tvSeries: [],
    playedBy: [],
  };
  test('shows fields for "name" and "culture"', async () => {
    const { getByText } = render(<Character character={character} />);
    expect(getByText("name")).toBeInTheDocument();
    expect(getByText("John")).toBeInTheDocument();
    expect(getByText("culture")).toBeInTheDocument();
    expect(getByText("asian")).toBeInTheDocument();
  });
  test("shows culture if it is present", async () => {
    const { getByText } = render(<Character character={character} />);
    expect(getByText("culture")).toBeInTheDocument();
    expect(getByText("asian")).toBeInTheDocument();
  });
  test("shows alias if no name is present", async () => {
    const { getByText } = render(
      <Character character={{ ...character, name: "" }} />
    );
    expect(getByText("Jason")).toBeInTheDocument();
  });
  test("shows how many books this characters made an appearance in", async () => {
    const { getByText } = render(<Character character={character} />);
    expect(getByText("Number of Books:")).toBeInTheDocument();
    expect(getByText("3")).toBeInTheDocument();
  });
});
