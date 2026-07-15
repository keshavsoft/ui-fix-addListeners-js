import parseInput from "./core/parseInput.js";
import showUsage from './core/showUsage.js';

import updateJs, { checkLines } from "./UpdateJs/index.js";

import pkg from '../../package.json' with { type: 'json' };

const version = pkg.version;

const run = ({ endPointsJsPath, showLog, inActionName, inFolderName }) => {

  const input = parseInput({
    jsFilePath: endPointsJsPath, showLog,
    inActionName, inFolderName
  });

  if (!endPointsJsPath) {
    if (!input.cmd || input.cmd === "--help" || input.cmd === "-h" || input.cmd === "help") {
      return showUsage(version);
    }

    const validCommands = ["ShowKeys", "ShowValue"];
    if (!validCommands.includes(input.cmd)) {
      console.error(`\x1b[31mError: Invalid command "${input.cmd}"\x1b[0m`);
      showUsage(version);
      process.exit(1);
    }
  }

  if (input.cmd === "ShowKeys") {
    console.log(checkLinesKeys);
    return;
  }

  if (input.cmd === "ShowValue") {
    const key = input.args[1];
    if (!key) {
      console.error(`Error: Please specify a key. Valid keys are: ${checkLinesKeys.join(", ")}`);
      process.exit(1);
    }
    try {
      const val = getCheckLinesValue({ inKey: key });
      console.log(JSON.stringify(val, null, 2));
    } catch (e) {
      console.error(e.message);
      process.exit(1);
    }
    return;
  }

  return updateJs(input);
};

export default run;
