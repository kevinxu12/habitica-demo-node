import { RLFunc } from "@runloop/runloop";

let gh_token = process.env.GH_TOKEN;

export const useDevbox = RLFunc({
  id: "useDevbox",
  run: async function (request, { systemCoordinator }) {
    console.log(`TOKEN: ${gh_token}`);
    let devbox = await systemCoordinator.createDevbox(undefined, undefined, [
      "curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -",
      "sudo apt install -y --no-install-recommends nodejs libkrb5-dev",
    ]);
    await devbox.execTool.exec(`env`)
    console.log("Devbox created: ", devbox.id);
    await devbox.execTool.exec(
      `GH_TOKEN=${gh_token} gh repo clone HabitRPG/habitica ./code -- --depth=1`
    );
    await devbox.execTool.exec("cd code && ls -la");
    await devbox.execTool.exec("cd code && npm i");

    console.log("File tools Create");
    await devbox.fileTool.createFile("test.txt", "Hello World");

    console.log("File tools read");
    let readResult = await devbox.fileTool.readFile("test.txt");

    console.log(`File Read result: ${readResult}`);
    let result = await devbox.execTool.exec("cd code && npm run lint");
    console.log(`Lint result${result.stdout}`);

    return { "readresult:": readResult, lintResult: result.stdout };
  },
});
