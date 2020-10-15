import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public setBuySellRate() {
    var buySellArray = [
      [ 'Uganda', 'Ugandan Shilling', '1', '1'],
      [ 'Kenya', 'Kenyan Shilling', '6', '6'],
      [ 'Malawi', 'Malawian Kwacha', '2', '2'],
      [ 'Rwanda', 'Rwandan Franc', '3', '3'],
      [ 'Tanzania', 'Tanzanian Shilling', '4', '4'],
      [ 'Zambia', 'Zambian Kwacha', '5', '5'],
    ];
    localStorage.setItem("buy_sell_rates", JSON.stringify(buySellArray));
    localStorage.setItem("buy_sell_rates_length", JSON.stringify(buySellArray.length));
  }

  public getBuySellRate() {
    var storedValue = JSON.parse(localStorage.getItem("buy_sell_rates"));
    return storedValue;
  }

  public deleteIndex(index) {
    var storedValue = JSON.parse(localStorage.getItem("buy_sell_rates"));
    console.log(storedValue.length);
    console.log(storedValue[index]);
    storedValue.splice(index, 1);
    console.log(storedValue.length);
    localStorage.setItem("buy_sell_rates", JSON.stringify(storedValue));
    localStorage.setItem("buy_sell_rates_length", JSON.stringify(storedValue.length));
  }

  public removeBuySellRate() {
    localStorage.removeItem('buy_sell_rates');
    localStorage.removeItem("buy_sell_rates_length");
  }
}
