<script src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback" defer></script>
curl 'https://challenges.cloudflare.com/turnstile/v0/siteverify' --data 'secret=0x4AAAAAAANvobqbfT2tJsGxi97kMHP6nKU&response=<RESPONSE>'
{
  "success": true,
  "error-codes": [],
  "challenge_ts": "2022-10-06T00:07:23.274Z",
  "hostname": "example.com"
}