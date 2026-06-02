# Advanced Git Tools Assignment Submission

## Repository Information
- Repository URL: https://github.com/YOUR_USERNAME/payment-system
- Main branch: main
- Feature branch: feature/progressive-commission

## Bug Investigation Results

### Problematic commit found via bisect:
"Optimize commission calculation"

### Blame output:
^c0589d2 (Portfolio Developer 2026-06-02 09:00:45 +0300  1) // Payment processing module
d54157e0 (Portfolio Developer 2026-06-02 14:43:04 +0300  2) const rates = require('../config/rates.json');
d54157e0 (Portfolio Developer 2026-06-02 14:43:04 +0300  3) 
^c0589d2 (Portfolio Developer 2026-06-02 09:00:45 +0300  4) function processPayment(amount, currency) {
d54157e0 (Portfolio Developer 2026-06-02 14:43:04 +0300  5)     const commission = rates[currency] || 0.02;
96e89b0d (Portfolio Developer 2026-06-02 14:43:04 +0300  6)     const total = amount + (amount * commission);
^c0589d2 (Portfolio Developer 2026-06-02 09:00:45 +0300  7)     return {
^c0589d2 (Portfolio Developer 2026-06-02 09:00:45 +0300  8)         amount: amount,
96e89b0d (Portfolio Developer 2026-06-02 14:43:04 +0300  9)         commission: commission, // БАГ! Возвращаем rate вместо суммы
^c0589d2 (Portfolio Developer 2026-06-02 09:00:45 +0300 10)         total: total,

### Commits with commission changes:
c0589d2 Initial payment system setup

## Recovery Operations

### Stash list (should be empty):

### Reflog recovery command used:
git cherry-pick e871ff9

## Verification

### Feature branch history (clean commits only):
d2f6c12 Add incident report
756ca51 Add secret-keys.json to gitignore
a16e3ff Add analytics tracking module (recovered)

### Secret keys check (should be empty):

## Self-Assessment Checklist
- [x] Used stash to save work
- [x] Found bug using bisect
- [x] Used blame to find author
- [x] Fixed bug with revert
- [x] Recovered commit via reflog
- [x] Cleaned feature branch history
- [x] Removed secret file from git
- [x] Created incident report
