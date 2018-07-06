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
    constructor(
        private http: Http,
    ) {
    }
    getProfile(): Observable<Persional> {
        const urlApi = porfolioApi.profile;
        return this.http.get(urlApi).map((res: Response) => {
            console.log(res.json());
            return res.json();
        }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    updateProfile(data: Persional) {
        const urlApi = porfolioApi.profile;
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
        return this.http.put(urlApi, param).map((res: Response) => {
            return res.json();
        }).toPromise();
    }
    getListEducation(): Observable<Education> {
        const urlApi = porfolioApi.education;
        return this.http.get(urlApi).map((res: Response) => {
            return res.json();
        }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    updateEducation(data: Education) {
        const urlApi = porfolioApi.education + data.id;
        const param = {
            'year': data.year,
            'level': data.level,
            'schoolname': data.schoolname,
            'decription': data.decription
        };
        return this.http.put(urlApi, param).map((res: Response) => {
            return res.json();
        }).toPromise();
    }
}
