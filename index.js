const fs = require("fs");
const path = require("path");
const exeSync = require("child_process").execSync;

const setUpCleanCommit = () => {
  //install husky if it is not installed
  if (!fs.existsSync(path.resolve(".husky"))) {
    exeSync("npx husky install", { stdio: "inherit" });
  }

  //create pre-commit hook
  fs.writeFileSync(
    path.resolve(".husky/pre-commit"),
    "#!/bin/sh\nnpx prettier --write .\n",
    "utf8"
  );
  exeSync("chmod +x .husky/pre-commit", { stdio: "inherit" });
  
  //Lod message to show clean commit is ready
  console.log("clean-commit has been set up!");
};

setUpCleanCommit()