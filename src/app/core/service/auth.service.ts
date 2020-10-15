import { Injectable } from '@angular/core';
import { DataService } from  './data.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private dataService: DataService) { }

  public login(logInInfo) {
    if ( logInInfo.auuid == '13219790' && logInInfo.password == '123456') {
      localStorage.setItem('ACCESS_TOKEN', logInInfo.auuid + '_' +  logInInfo.password);
      localStorage.setItem('access', '1'); // 0 - approver
      this.dataService.setBuySellRate();
      console.log('Login Successful');
      return true;
    }
    else {
      alert('Incorrect Username or Password');
      return false;
    }
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public accessStatus() {
    return localStorage.getItem('access') === '0';
  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('access');
    this.dataService.removeBuySellRate();
  }
}
