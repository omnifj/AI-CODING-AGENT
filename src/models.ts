import type { LanguageModel } from "ai";
import { ollama } from "ollama-ai-provider-v2";

export const ollamaQwen3_4b_instruct_q4_KM: LanguageModel = ollama(
  "kamekichi128/qwen3-4b-instruct-2507:latest",
);
