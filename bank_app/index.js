class BankAccount {
    static accounts = [];

    constructor(accountNumber, ownerName, balance) {
        if (this.isDuplicateAccount(accountNumber)) {
            throw new Error("Account with the same account number already exists.");
        }
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
        BankAccount.accounts.push(this);
    }

    isDuplicateAccount(accountNumber) {
        return BankAccount.accounts.some(account => account.accountNumber === accountNumber );
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: $${this.balance}`);
    }
}

// instances of BankAccount
const account1 = new BankAccount(1001, "John Doe", 500);
const account2 = new BankAccount(1002, "Jane Smith", 1000);


console.log("Account 1:");
account1.displayAccountInfo();
account1.deposit(200);
account1.withdraw(50);
account1.withdraw(700); 
console.log("New balance:", account1.getBalance());

console.log("\nAccount 2:");
account2.displayAccountInfo();
account2.deposit(300);
account2.withdraw(200);
console.log("New balance:", account2.getBalance());
