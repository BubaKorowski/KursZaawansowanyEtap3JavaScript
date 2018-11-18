class Wallet {
  constructor(money) {
    let _money = money;
    //pobiera aktualną wartość Wallet
    this.getWalletValue = () => _money;

    //sprawdza czy user ma wystarczająco pieniędzy
    this.checkCanPlay = value => {
      if (_money > value) return true;
      return false;
    };

    this.changeWallet = (value, type = "+") => {
      if (typeof value === "number" && !isNaN(value)) {
        if (type === "+") {
          return (_money += value), console.log(_money, value, "plus");
        } else if (type === "-") {
          return (_money -= value), console.log(_money, value, "minus");
        } else {
          throw new Error("Nieprawidłowy typ działania");
        }
      } else {
        console.log(typeof value);
        throw new Error("Nieprawidłowa liczba");
      }
    };
  }
}
const wallet = new Wallet(111);
