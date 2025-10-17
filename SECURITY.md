# SECURITY? BET. 💅

## 🚨 Pull Up With Bugs?
- Slide into `security@static-rss-reader.local` with the whole tea: repro steps, PoC, screenshots, vibes.
- Don’t blast it on GitHub issues—keep it low-key so we can cook a fix in peace.
- We clap back in ≤3 biz days; full game plan drops by day 10 unless the boss fight is extra wild.

## 🗓️ Versions That Get Love
- `main` branch = main character. Always patched, always glowing.
- Tags from the last 6 months still get the armor buff if it’s a critical hit.

## 🧠 Big-Brain Secure Coding Playbook
- Stack the [OWASP Top Ten](https://owasp.org/www-project-top-ten/) and [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/) like your life depends on it. Because it does.
- Any outside data (RSS feeds, params, env vars) = sus until sanitized. Validate or evaporate.
- Dependencies are strangers—keep them patched, run `npm audit`, distrust mid-tier packages with zero street cred.
- Flex TypeScript: start with `unknown`, narrow it down, guard every property access like it’s VIP.
- No raw HTML dumps. `dangerouslySetInnerHTML`? Only if you armor it up with OWASP-approved sanitizer drip.
- Force HTTPS everywhere, and if you’re fetching outside the browser, verify certs like a sigma.
- Secrets live off-repo. If they leak, rotate faster than you rotate memes.

## 🏗️ Build + Deploy Rituals
- Combo `npm run lint`, `npm run build`, and `npm audit` before shipping. No skips.
- Inspect `public/feeds.json` for cursed URLs or script-kiddie sauce.
- Keep `package-lock.json` tight; no vibes, no tampering, checksum or bust.
- Lock the branch with protection rules so CI blessings hit before merge.

## 🆘 When Stuff Explodes
- If prod gets pwned, pull the site, hotfix ASAP, and ping the squad with what went down plus recovery steps.
- Drop an incident postmortem in the project wiki so future you doesn’t repeat the L.

Stay secure, stay rizzed, ship responsibly. 🛡️
