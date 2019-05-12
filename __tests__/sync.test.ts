import { complianceTestsSync } from "@veestore/test-suite";
import { StoreSync } from "../src";

complianceTestsSync(new StoreSync<number>(32), [...Array(5).keys()]);
