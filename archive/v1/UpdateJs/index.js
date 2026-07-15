import fixAnyJs from "express-fix-any-js";
import checkLines from "./checkLines.json" with {type: "json"};

const checkLinesKeys = Object.keys(checkLines);

const alterLines = ({ inActionName, inFolderName, inGetType }) => {
    let checkLinesData = checkLines;
    if (!checkLinesData[inGetType]) {
        throw new Error(`Invalid inGetType: ${inGetType}. Must be one of: ${checkLinesKeys.join(", ")}`);
    };

    // Deep clone the configuration to avoid mutating the cached JSON import.
    let localCheckLines = JSON.parse(JSON.stringify(checkLinesData[inGetType]));

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

const getCheckLinesValue = ({ inKey }) => {
    if (!(inKey in checkLines)) {
        throw new Error(`Invalid inKey: ${inKey}. Must be one of: ${checkLinesKeys.join(", ")}`);
    };

    return checkLines[inKey];
};

const startFunc = ({ inJsFilePath, inActionName, inFolderName, showLog = false, inGetType }) => {

    const localCheckLines = alterLines({ inActionName, inFolderName, inGetType });

    const fromFixAnyJs = fixAnyJs({
        showLog,
        jsFilePath: inJsFilePath,
        inCheckLines: localCheckLines
    });

    return fromFixAnyJs;
};

export { getCheckLinesValue, checkLinesKeys };
export default startFunc;
