import React, { useEffect, useState } from "react";

const Recipes = () => {
  const [recipeId, setRecipesId] = useState(1);
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      setIsLoading(true);
      try {
        const data = await delayedCall(recipeId);
        setRecipe(data);
      } catch (error) {
        console.error("Failed to fetch recipe:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  async function delayedCall(id) {
    const res = await fetch(`https://dummyjson.com/recipes/${id}`);
    const data = await res.json();
    return data;
  }

  if (isLoading || !recipe) return <div>Loading...</div>;

  return (
    <div>
      <button
        onClick={() => {
          if (recipeId > 1) setRecipesId((prev) => prev - 1);
        }}
      >
        Prev
      </button>
      <button onClick={() => setRecipesId((prev) => prev + 1)}>Next</button>

      <h3>No. {recipe.id}</h3>
      <div>{recipe.name}</div>
      <div>
        {recipe.tags.map((tag) => (
          <div key={tag}>{tag}</div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
