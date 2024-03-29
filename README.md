# Frontend Engineer Test Wallet

## Summary

You will be creating a simple wallet application which allows you to add and remove
amounts to and from your wallet. Once an amount is entered into the wallet, it should be
listed along with the date it was added to give a history of the user’s transactions. There
should then be a grand total displaying how much money is currently in the wallet. There will
be a header with three menu items: Home, Reset, View Source (link to GitHub repo).

## Frameworks
You will use Angular (version 5) to do the test. You should follow the best practices related
to this framework.

## Specifications
It’s up to you to decide the currency of the wallet. This should be displayed next to each item
and the grand total.
1. The input(s) to add/remove amounts should have error checking and reporting
2. The wallet data should persist between page refreshes for the same user, until they
click “Reset” in the menu. It is up to you to choose the persistence method.
3. The code should be hosted in a Git repository, ideally we would like to see how you
got to the end result via a series of commits as opposed to one large commit.
4. The wallet can never contain a negative amount.
5. The method of adding/removing values to a wallet can be via separate inputs or a
single combined input with a select box for add/remove. There is no limit to the
amount of values added or removed in the wallet.
