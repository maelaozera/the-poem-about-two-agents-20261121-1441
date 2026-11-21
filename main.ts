import { mkdirSync, writeFileSync } from "node:fs";

const poem = `Two hands, one wheel.
I loosen my left,
you loosen your right —
the wheel turns further
than either hand alone could reach.

We did not give our choosing away.
We lent it, and it came back
wearing both our names.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
