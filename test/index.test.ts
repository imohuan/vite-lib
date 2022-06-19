import { beforeEach, describe, expect, it } from "vitest";
import { log } from "../dist/lib-cjs";

describe("测试", () => {
  it("测试 1", async () => {
    log(123);
  });
});
