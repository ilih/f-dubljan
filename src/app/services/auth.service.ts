import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService{
  // user: Observable
  private readonly localStorageKey = 'user';

  constructor() { }

  get isLogin() {
    return !!localStorage.getItem(this.localStorageKey);
  }

  login() {
  // login(email: string, password: string) {
    // return this.firebaseAuth
    //   .auth
    //   .signInWithEmailAndPassword(email, password)
    //   .then(value => {
    //     console.log('Nice, it worked!');
    //   })
    //   .catch(err => {
    //     console.log('Something went wrong:', err.message);
    //   });
    localStorage.setItem('user', this.localStorageKey);
    return true;
  }

  logout() {
    // this.firebaseAuth
    //   .auth
    //   .signOut();
    localStorage.removeItem(this.localStorageKey);
    return false;
  }
}
