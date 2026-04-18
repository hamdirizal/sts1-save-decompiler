import { ENCRYPTION_KEY } from "./constants";
import { encode } from "./encoder";

async function main() {
  const filePath = "./_DECOMPILED.json";

  const file = Bun.file(filePath);

  if (!(await file.exists())) {
    console.error(`File not found: ${filePath}`);
    process.exit(1);
  }

  const jsonString = await file.text();
  const jsonContent = JSON.parse(jsonString);
  const encoded = encode(JSON.stringify(jsonContent), ENCRYPTION_KEY);

  const outputPath = "_COMPILED.autosave";
  await Bun.write(outputPath, encoded);
  console.info(`Compiled save written to ${outputPath}`);
}

main();
