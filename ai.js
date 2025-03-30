import { CohereClient } from "cohere-ai";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.
`;

// Initialize Cohere AI Client
const hf = new CohereClient({ apiKey: import.meta.env.VITE_HF_ACCESS_TOKEN });

export async function getRecipeFromMistral(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");
  try {
    const response = await hf.generate({
      model: "command-r", // Use "command-r-plus" if you have access
      prompt: `${SYSTEM_PROMPT}\nUser: I have ${ingredientsString}. Please give me a recipe!`,
      max_tokens: 300,
      temperature: 0.7,
    });

    // Ensure response is valid
    if (response.generations && response.generations.length > 0) {
      return response.generations[0].text;
    } else {
      throw new Error("Invalid response from Cohere AI");
    }
  } catch (err) {
    console.error("Error fetching recipe:", err.message);
    return "Sorry, I couldn't generate a recipe at this moment.";
  }
}
