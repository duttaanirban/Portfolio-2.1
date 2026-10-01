# Contact email setup

The contact form posts to `/api/contact`, which sends messages through Resend to
`anirbandutta458@gmail.com`. The visitor's address is used as Reply-To, so replying
in Gmail reaches the visitor. The recipient cannot be changed by form input.

## Configure delivery

1. Create a Resend account and a sending API key.
2. Verify a domain you own in Resend and choose a sender on that domain.
3. Copy `.env.example` to `.env.local` and set:
   - `RESEND_API_KEY`: your private API key.
   - `CONTACT_FROM_EMAIL`: e.g. `Portfolio <contact@your-verified-domain.com>`.
4. Add the same variables to the appropriate environments in Vercel and redeploy.
   Restart the local development server after changing `.env.local`.

Do not prefix these variables with `NEXT_PUBLIC_` or commit credentials.

For initial testing only, Resend permits `onboarding@resend.dev` as the sender
when the recipient is the Resend account owner's email. For this portfolio,
the account must therefore use `anirbandutta458@gmail.com`. Verify your own
domain for production sending; a Gmail address or a Vercel subdomain is not a
domain you can verify as your sender.

## Verification

- Run `node --test tests/contact.test.mjs` for mocked delivery and failure checks.
- After configuring credentials, submit a message through the form, confirm it
  arrives in Gmail (including checking spam), and verify Reply-To.
- A success response means Resend accepted the email; it does not guarantee inbox
  placement. Delivery status can be checked in Resend.
- On errors, input is retained and the direct email link remains available.

The form includes a honeypot and rejects cross-origin browser submissions. These
are basic spam deterrents, not a distributed rate limiter. Configure hosting-level
rate limits if needed for a publicly exposed deployment.

Provider references:
- https://resend.com/docs/api-reference/emails/send-email
- https://resend.com/docs/knowledge-base/403-error-resend-dev-domain
