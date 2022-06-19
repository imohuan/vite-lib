import chalk from "chalk";
import { random } from "lodash-es";

export function log(...args: any[]) {
  const colors = [chalk.red.bold, chalk.green.bold, chalk.gray.bold];
  const getColor = () => colors[random(colors.length - 1)];
  return console.log(...args.map((arg) => getColor()(arg)));
}

export * from "./helper";

log(..."abcdefghijklmnopqrstuvwxyz".split(""));
console.log(chalk, chalk.red.bold("hello"));
