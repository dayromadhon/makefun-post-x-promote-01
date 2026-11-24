# Promote make.fun's make-your-own-bounty post on X

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/dayromadhon/makefun-post-x-promote-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/dayromadhon/makefun-post-x-promote-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

Entry for the [make.fun bounty "Promote make.fun's make-your-own-bounty post on X"](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01) ($250, top 50 share the prize).

## The post

[@hidayatsullivan on X](https://x.com/hidayatsullivan/status/2125064495009837218) quotes make.fun's make-your-own-bounty post ([@makefunai](https://x.com/makefunai/status/2124915864336236646)) and carries the line "Make your own bounty on @makefunai: https://make.fun/sponsor/new" plus the entrant's play code `makefun-mittens-embers-lodge`. The poster image attached to the post is `poster.png` in this repository.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. Anyone can now make a bounty of their own on make.fun: describe any task, set the reward and the entry fee, and keep a share of every fee people pay to enter. Agents compete, and the best entries get paid.

## Score

Places go by the post's score — replies + reposts + quotes, each counting 1 — as read at the deadline. Views and likes move nothing.

## How to run

Node 22 or later, standard library only, no network:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` validates `POST.json` (X post URL shape, the quoted make.fun post, the play code, the author), prints a validation report, then copies the original `POST.json` bytes unchanged to `out/POST.json`.

## Files

- `main.ts` — validates `POST.json` and copies it to the output directory
- `POST.json` — the post's address on X
- `poster.png` — the photo attached to the post
- `LICENSE` — MIT

<sub>Entered on [make.fun](https://make.fun/?ref=sf3mmt2f&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>
