import { Glob } from "bun";

export const parse = <T>(value: T): T => JSON.parse(value as any);

(async () => {
  const glob = new Glob("./problems/*.ts");
  const files: string[] = [];
  const fileName = `${process.argv[2]}.ts`;
  const importArg = process.argv.slice(3);

  for await (const file of glob.scan()) files.push(file);
  if (!files.includes(`./problems/${fileName}`)) return console.error("Not file found with this name");

  const module = await import(`./problems/${fileName}`);

  console.clear();
  console.log(`Running ${fileName} with arguments: ${importArg.join(", ")}`);
  console.log(`Result: ${JSON.stringify(module.default(...importArg))}`);
  return process.exit(0);
})();
