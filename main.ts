import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? ".";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const POST_URL =
  "https://x.com/hidayatsullivan/status/2125064495009837218";
const QUOTE_URL = "https://x.com/makefunai/status/2124915864336236646";
const PLAY_CODE = "makefun-mittens-embers-lodge";
const AUTHOR = "hidayatsullivan";

// Accepts https://x.com/<handle>/status/<id> and the twitter.com /
// www. / mobile. / /i/web/status/<id> variants the gate reads.
const POST_URL_RE =
  /^https:\/\/(?:www\.|mobile\.)?(?:x\.com|twitter\.com)\/(?:i\/web\/status\/|[A-Za-z0-9_]+\/status\/)\d+$/;

function fail(message: string): never {
  console.error(`FAIL: ${message}`);
  process.exit(1);
}

function check(name: string, ok: boolean, detail: string): void {
  if (!ok) fail(`${name}: ${detail}`);
  console.log(`PASS: ${name}`);
}

const raw = readFileSync(join(BOT_DIR, "POST.json"));

let data: unknown;
try {
  data = JSON.parse(raw.toString("utf8"));
} catch {
  fail("POST.json is not valid JSON");
}

check(
  "post_is_object",
  typeof data === "object" && data !== null && !Array.isArray(data),
  "POST.json must be a JSON object",
);
const post = data as Record<string, unknown>;

check(
  "url_is_x_post",
  typeof post.url === "string" && POST_URL_RE.test(post.url),
  "url must be an X post address like https://x.com/<handle>/status/<id>",
);

check(
  "quote_url_is_makefun_post",
  post.quote_url === QUOTE_URL,
  `quote_url must be ${QUOTE_URL}`,
);

check(
  "play_code",
  post.play_code === PLAY_CODE,
  `play_code must be ${PLAY_CODE}`,
);

check(
  "author",
  post.author === AUTHOR,
  `author must be ${AUTHOR}`,
);

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "POST.json"), raw);
console.log(`Wrote ${join(OUTPUT_DIR, "POST.json")} (${raw.length} bytes, unchanged)`);
