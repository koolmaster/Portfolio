import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/catch';
import { PortfolioService } from '../../provider/service/PortfolioService';

@Injectable()
export class AdminResolve implements Resolve<any> {
    constructor(private portfolioService: PortfolioService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.portfolioService.getProfile();
    }
}
