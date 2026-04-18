import { ENCRYPTION_KEY } from "./constants";
import { decode } from "./encoder";
import { isDirectory } from "./file-helper";

async function main() {
  const filePath = process.argv[2];

  if (!filePath) {
    console.error("Usage: bun run decompile <path-to-file>");
    process.exit(1);
  }

  if (isDirectory(filePath)) {
    console.error("Please point to a file instead of folder");
    process.exit(1);
  }

  const file = Bun.file(filePath);

  if (!(await file.exists())) {
    console.error(`File not found: ${filePath}`);
    process.exit(1);
  }

  const rawContent = await file.text();
  const result = decode(rawContent, ENCRYPTION_KEY);
  if (result instanceof Error) {
    console.error(result.message);
  }
  console.log(result);
}

main();
