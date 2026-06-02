# Incident Report: Payment Commission Bug

## Bug Discovery
- Found using: `git bisect start && git bisect bad HEAD && git bisect good <first-commit>`
- Problematic commit: [SHA коммита "Optimize commission calculation"]
- Author: [из git blame]

## Root Cause
The bug was introduced in the "Optimize commission calculation" commit where:
1. Commission calculation was changed from `amount * commission` to returning `commission` (rate) directly
2. The `commission` variable was repurposed to store the rate instead of the calculated commission amount
3. This caused the function to return `0.02` instead of `2` for a $100 USD payment

## Fix Applied
- Reverted commit: [SHA of "Optimize commission calculation"]
- Fix commit: [SHA of "Fix commission calculation"]
- Verification: `node test-payment.js` now returns commission = 2

## Stash Usage
- Stashed work: Progressive commission feature (commission.js changes + analytics.js)
- Stash command used: `git stash push -m "WIP: Progressive commission feature"`
- Recovery command: `git stash pop`
- Recovery successful: Yes

## Reflog Recovery
- Lost commit: Analytics tracking module
- Recovery command: `git cherry-pick <hash_from_reflog>`
- Restored SHA: [SHA of recovered commit]

## Lessons Learned
1. Always write tests before refactoring - the bug would have been caught immediately
2. Use `git revert` for published commits to avoid rewriting public history
3. `git stash` is invaluable for context switching during emergencies
4. `git reflog` is a lifesaver for accidental `reset --hard` operations
5. Never commit sensitive files - use `.gitignore` proactively

## Verification
- [x] Bug fixed and tested
- [x] Revert used for published commit
- [x] Stash recovered successfully
- [x] Reflog used to restore lost work
- [x] Secret file removed from history
