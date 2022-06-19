import { beforeEach, describe, expect, it } from "vitest";
import { log } from "../dist/imohuan-cli-cjs";

describe("测试", () => {
  it("测试 1", async () => {
    log(123);
  });
});
