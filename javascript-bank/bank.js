/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance <= 0 || !Number.isInteger(balance)) {
    return null;
  } else {
    var account = new Account(this.nextAccountNumber, holder);
    account.deposit(balance);
    this.accounts.push(account);
    this.nextAccountNumber++;
  }
  return account.number;
};

Bank.prototype.getAccount = function (number) {
  if (this.accounts.number !== number) {
    return null;
  }
  for (var i = 0; i < this.accounts.length; i++) {
    if (number === this.accounts[i].number) {
      return this.account[i].number;
    }
  }
};

Bank.prototype.getTotalAssets = function () {

};
