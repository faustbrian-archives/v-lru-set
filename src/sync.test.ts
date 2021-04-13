import { complianceTestsSync } from "@konceiver/v-test-suite";

import { StoreSync } from "./sync";

complianceTestsSync(new StoreSync<number>(32), [...Array(5).keys()]);
