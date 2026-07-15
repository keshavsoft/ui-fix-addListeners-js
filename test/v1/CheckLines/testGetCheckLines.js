import { getCheckLinesValue } from "../../../index.js";

const testGetCheckLinesValue = async () => {
    console.log("=== Testing getCheckLinesValue in a separate file ===");

    // 1. Test "simple" route type
    const simpleResult = await getCheckLinesValue({
        inKey: "simple",
    });
    console.log("\n[simple] Result:\n", JSON.stringify(simpleResult, null, 2));
};

testGetCheckLinesValue().catch(err => {
    console.error("Test failed:", err);
    process.exit(1);
});
