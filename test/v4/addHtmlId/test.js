import path from "path";
import index from "../../../index.js";

const startFunc = () => {
    index({
        showLog: true,
        endPointsJsPath: path.join(process.cwd(), "test", "v3", "addHtmlId", "addListeners.js"),
        inActionName: "Html1",
        inFolderName: "Fold1"
    });
};

startFunc();