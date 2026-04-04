import { readFileSync, writeFileSync } from "node:fs";
import { spawn } from "node:child_process";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const cliPath = require.resolve("@tinacms/cli/dist/index.js");
const cliBinPath = require.resolve("@tinacms/cli/bin/tinacms");

const source = readFileSync(cliPath, "utf8");
const marker = "allowedHosts: true, // patched by tina-dev-allow-all";
const needle = `server: {\n      host: configManager.config?.build?.host ?? false,`;

if (!source.includes(marker)) {
  if (!source.includes(needle)) {
    throw new Error(`Could not find Tina CLI Vite server config in ${cliPath}`);
  }

  const patched = source.replace(
    needle,
    `${needle}\n      ${marker}`,
  );

  writeFileSync(cliPath, patched, "utf8");
}

const child = spawn(
  process.execPath,
  [cliBinPath, "dev", ...process.argv.slice(2)],
  {
    stdio: "inherit",
    env: {
      ...process.env,
      TINA_PUBLIC_IS_LOCAL: process.env.TINA_PUBLIC_IS_LOCAL ?? "true",
    },
  },
);

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});
