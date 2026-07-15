export default function parseInput({ jsFilePath, inGetType = "simple",
    showLog, inActionName = "KeshavSoftAction", inFolderName = "KeshavSoftFolderName",
    inColumnName
}) {

    const [...args] = process.argv.slice(2);

    return {
        cmd: args[0],
        showLog: args[1] === undefined
            ? showLog
            : args[1] === "true",
        inJsFilePath: jsFilePath || process.cwd(),
        inActionName, inFolderName, inGetType,
        inColumnName,
        args
    };
};