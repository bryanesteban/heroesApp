import { Injectable } from '@angular/core';
import { CanActivateFn, CanMatch, CanMatchFn } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthGuard  implements CanMatchFn, CanActivateFn{



  constructor() { }

}
