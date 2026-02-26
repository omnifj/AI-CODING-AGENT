import { agent } from "./agent.ts";

const { text } = await agent.generate({
  prompt: "总结 package.json，写入README.md",
});

console.log(text);
