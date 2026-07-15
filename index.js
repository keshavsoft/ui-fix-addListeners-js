import getLatestVersion from "./bin/core/getLatestVersion.js";

const load = async ({ endPointsJsPath, inActionName, showLog, inFolderName,
    inGetType, inColumnName }) => {

    const v = getLatestVersion();

    const module = await import(`./bin/${v}/start.js`);

    return await module.default({
        endPointsJsPath, inFolderName,
        inActionName, showLog, inGetType, inColumnName
    });
};

const getCheckLinesKeys = async () => {
    const v = getLatestVersion();
    const { checkLinesKeys } = await import(`./bin/${v}/UpdateJs/index.js`);
    return checkLinesKeys;
};

const getCheckLinesValue = async ({ inKey }) => {
    const v = getLatestVersion();
    const { getCheckLinesValue } = await import(`./bin/${v}/UpdateJs/index.js`);
    return getCheckLinesValue({ inKey });
};

export { getCheckLinesKeys, getCheckLinesValue };
export default load;
