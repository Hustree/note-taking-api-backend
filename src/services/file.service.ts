import fs from "fs";
import { promisify } from "util";

const read = promisify(fs.readFile);
const write = promisify(fs.writeFile);

export const readFile = async <T>(path: string): Promise<T> => {
  try {
    const data = await read(path, { encoding: "utf8" });
    return JSON.parse(data);
  } catch (error: unknown) {
    if (
      error instanceof Error &&
      (error as NodeJS.ErrnoException).code === "ENOENT"
    ) {
      await writeFile(path, JSON.stringify([]));
      return [] as T;
    }
    throw error;
  }
};

export const writeFile = async (path: string, data: any): Promise<void> => {
  await write(path, JSON.stringify(data, null, 2), { encoding: "utf8" });
};
