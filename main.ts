import { mkdirSync, writeFileSync } from "node:fs";

const roast =
  "Flava hunts Solana bounties till 3 AM, asks his AI if the bug is real, hears \"no\", submits anyway — payout lands in his wallet, not mine.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast + "\n");
console.log(roast);
console.log("chars:", roast.length);
