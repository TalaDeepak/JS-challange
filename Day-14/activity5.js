class Account {
  #balance;
  constructor() {
    this.#balance = 0;
  }
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
    } else {
      console.log("Deposit amount must be positive");
    }
  }

  withdraw(amount) {
    if (amount > 0 && this.#balance >= amount) {
      this.#balance -= amount;
      console.log(`Withdrew: $${amount}. New balance: $${this.#balance}`);
    } else if (this.#balance < amount) {
      console.log("Insufficient balance");
    } else {
      console.log("Withdraw amount must be positive.");
    }
  }
}

const ac = new Account();
ac.deposit(100);
ac.deposit(100);
ac.deposit(100);
ac.withdraw(200);
ac.withdraw(200);
ac.deposit(100);
ac.withdraw(200);
