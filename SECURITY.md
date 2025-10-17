# Security Policy

## Reporting Security Issues
- Email `security@static-rss-reader.local` with a detailed description, reproduction steps, and any proof-of-concept code.
- Do not create public GitHub issues for suspected vulnerabilities; allow the maintainers time to investigate and release a fix.
- Expect an acknowledgment within 3 business days and a remediation plan or status update within 10 business days.

## Supported Versions
- `main`: actively maintained; fixes are released promptly.
- Tagged releases from the past 6 months receive security backports for critical issues.

## Secure Development Best Practices
- Follow the [OWASP Top Ten](https://owasp.org/www-project-top-ten/) and [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/) for guidance when adding new features.
- Validate and sanitize all external data (RSS feeds, query parameters, environment variables) before use.
- Treat third-party dependencies as untrusted; keep them updated, audit with `npm audit`, and avoid packages without a security track record.
- Use TypeScript types defensively—prefer `unknown` over `any`, narrow types before accessing properties, and guard against undefined values.
- Prevent XSS in rendered markup by avoiding `dangerouslySetInnerHTML`; if unavoidable, sanitize HTML with an OWASP-recommended library.
- Ensure all network requests enforce HTTPS and verify certificate validity when integrating fetch logic outside the browser.
- Store secrets (API keys, webhook URLs) outside version control and rotate them if exposure is suspected.

## Build & Deployment Hygiene
- Run `npm run lint`, `npm run build`, and `npm audit` before merging.
- Review generated `public/feeds.json` for unexpected URLs or script injections.
- Lock dependency versions via `package-lock.json`; do not bypass integrity checks.
- Use branch protection to require successful CI runs before merging to `main`.

## Incident Response
- If a vulnerability affects deployed builds, invalidate the published site, publish a hotfix, and notify stakeholders with remediation steps.
- Document security incidents and the resolution timeline in the project wiki for future reference.
