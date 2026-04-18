import { isDirectory } from "./file-helper";

async function main(): void {
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

  const content = await file.text();
  console.log(content);
}

main();
