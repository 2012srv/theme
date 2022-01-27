import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  appName!: string;
  constructor() {
    // this.appName = '';
  }

  getAuthStatus(): boolean {
    return !this.checkSession('session');
  }

  setSession(key: string, data: any): void {
    const strData = JSON.stringify(data);
    sessionStorage.setItem(`${this.appName}_${key}`, strData);
  }
  getSession(key: string): any {
    const data = this.checkSession(key) ? JSON.parse(sessionStorage.getItem(`${this.appName}_${key}`) as string) : {};
    return data;
  }
  checkSession(key: string): boolean {
    const status: boolean = !!sessionStorage.getItem(`${this.appName}_${key}`);
    return status;
  }
  removeSession(key: string): void {
    if(this.checkSession(key)) {
      sessionStorage.removeItem(`${this.appName}_${key}`);
    }
  }

  setLocal(key: string, data: any): void {
    const strData = JSON.stringify(data);
    localStorage.setItem(`${this.appName}_${key}`, strData);
  }
  getLocal(key: string): any {
    const data = this.checkLocal(key) ? JSON.parse(localStorage.getItem(`${this.appName}_${key}`) as string) : {};
    return data;
  }
  checkLocal(key: string): boolean {
    const status: boolean = !!localStorage.getItem(`${this.appName}_${key}`);
    return status;
  }
  removeLocal(key: string): void {
    if(this.checkLocal(key)) {
      localStorage.removeItem(`${this.appName}_${key}`);
    }
  }
}
