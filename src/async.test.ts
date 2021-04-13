import { complianceTestsAsync } from "@konceiver/v-test-suite";

import { StoreAsync } from "./async";

complianceTestsAsync(new StoreAsync<number>(32), [...Array(5).keys()]);
