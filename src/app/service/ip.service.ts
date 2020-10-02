import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
// import 'rxjs/add/operator/toPromise';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class IpService {

  constructor(private httpClient: HttpClient, private http: Http) { }

  getIp(): Observable<HttpResponse<any>>{
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpClient.get<HttpResponse<any>>('http://ip.jsontest.com', httpOption);
  }

  getIp2(){
    return this.http.get('http://ip.jsontest.com')
    .toPromise()
    .then(res => res.json())
    .then(resJson => resJson.ip);
  }
}
