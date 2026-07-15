import fixAnyJs from "express-fix-any-js";
import checkLines from "./checkLines.json" with {type: "json"};

const alterLines = ({ inActionName, inFolderName }) => {
    let localCheckLines = checkLines;

    if (localCheckLines.importLines && localCheckLines.importLines.toInsertLine) {
        localCheckLines.importLines.toInsertLine = localCheckLines.importLines.toInsertLine.replaceAll("${folderName}", inFolderName);
    }
    if (localCheckLines.importLines && localCheckLines.importLines.duplicationCheck) {
        localCheckLines.importLines.duplicationCheck = localCheckLines.importLines.duplicationCheck.replaceAll("${folderName}", inFolderName).replaceAll("'", '"');
    }

    if (localCheckLines.useLines && localCheckLines.useLines.toInsertLine) {
        localCheckLines.useLines.toInsertLine = localCheckLines.useLines.toInsertLine.replaceAll("${endpoint}", inActionName);
        localCheckLines.useLines.toInsertLine = localCheckLines.useLines.toInsertLine.replaceAll("${folderName}", inFolderName);
    };

    if (localCheckLines.useLines && localCheckLines.useLines.duplicationCheck) {
        localCheckLines.useLines.duplicationCheck = localCheckLines.useLines.duplicationCheck.replaceAll("${endpoint}", inActionName).replaceAll("'", '"');
    };

    return localCheckLines;
};

const startFunc = ({ inJsFilePath, inActionName, inFolderName, showLog = false }) => {

    const localCheckLines = alterLines({ inActionName, inFolderName });

    const fromFixAnyJs = fixAnyJs({
        showLog,
        jsFilePath: inJsFilePath,
        inCheckLines: localCheckLines
    });

    return fromFixAnyJs;
};

export { checkLines };
export default startFunc;
