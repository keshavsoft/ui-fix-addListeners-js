export default function parseInput({ jsFilePath,
    showLog, inActionName = "KeshavSoftAction", inFolderName = "KeshavSoftFolderName"
}) {

    const [...args] = process.argv.slice(2);

    return {
        cmd: args[0],
        showLog: args[1] === undefined
            ? showLog
            : args[1] === "true",
        inJsFilePath: jsFilePath || process.cwd(),
        inActionName, inFolderName,
        args
    };
};
