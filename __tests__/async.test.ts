import { complianceTestsAsync } from "@veestore/test-suite";
import { StoreAsync } from "../src";

complianceTestsAsync(new StoreAsync<number>(32), [...Array(5).keys()]);
