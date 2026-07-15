import { getCheckLinesKeys } from "../../../index.js";

const startFunc = async () => {
    console.log("Running V5 CheckLines test...");

    // Test key exposure
    const keys = await getCheckLinesKeys();
    console.log("Keys:", keys);
};

startFunc().catch(err => {
    console.error("Test failed:", err);
    process.exit(1);
});
