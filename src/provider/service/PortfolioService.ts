import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/catch';
import { Persional, Education } from '../model/persional';
import { Http, Response, RequestOptions } from '@angular/http';
import { porfolio, porfolioApi } from '../../app/app.contans';

@Injectable()
export class PortfolioService {
    urlApi = porfolioApi.profile;
    constructor(
        private http: Http,
    ) {
        this.http.get(this.urlApi).subscribe(data => {
            localStorage.setItem(porfolio.userLocalStorage, JSON.stringify(data.json()));
        });
    }
    updateProfile(data: Persional) {
        const param = {
            'fullname': data.fullname,
            'career': data.career,
            'dateofbirth': data.dateofbirth,
            'phone': data.phone,
            'address': data.address,
            'email': data.email,
            'website': data.website,
            'nationality': data.nationality,
            'aboutme': data.aboutme,
            'social': data.social
        };
        localStorage.setItem(porfolio.userLocalStorage, JSON.stringify(param));
        this.http.put(this.urlApi, param).subscribe();
    }
    getListEducation(): Observable<Education> {
        const urlApi = porfolioApi.education;
        return this.http.get(urlApi).map((res: Response) => {
            return res.json();
        }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
