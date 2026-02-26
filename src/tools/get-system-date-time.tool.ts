import { tool } from "ai";
import z from "zod";

export const getSystemDateTimeToolSchema = z.object();

export const getSystemDateTimeTool = tool({
  description:
    "Return the system current date time. Useful to provide the current time to user.",
  inputSchema: getSystemDateTimeToolSchema,
  async execute() {
    console.log("调用了工具");
    return new Date().toLocaleString();
  },
});
