import path from "path";
import index from "../../../index.js";

const startFunc = async () => {
    await index({
        showLog: true,
        endPointsJsPath: path.join(process.cwd(), "addListeners.js"),
        inActionName: "Html1",
        inFolderName: "Fold1"
    });
};

startFunc().then();