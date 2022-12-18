import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap } from 'rxjs';
import { ConfigurationService } from '../Configurations/configuration.service';
import { AppUser } from './AppUser';
import { UserAuth } from './UserAuth';

const API_ENDPOINT = "Auth/";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  securityObject: UserAuth = new UserAuth();
  apiUrl: string = "";
  private hasChanged = new BehaviorSubject<number>(0);
  securityReset = this.hasChanged.asObservable();

  constructor(private http: HttpClient,
    private configService: ConfigurationService) {
    this.apiUrl = this.configService.settings.TokenUrl + API_ENDPOINT;
  }


  login(entity: AppUser): Observable<UserAuth> {
   
    return this.http.post<UserAuth>(this.apiUrl + "Token",
      entity, httpOptions).pipe(
        tap(resp => {
          Object.assign(this.securityObject, resp);
          alert(this.securityObject.authCode);
          //if(this.securityObject.authCode!="")
          //{
            //alert(this.securityObject.authCode);
            //this.securityObject.isAuthenticated=true;
            //this.securityObject.expireDate=new Date();
            //this.securityObject.expireDate.setSeconds( this.securityObject.expireDate.getSeconds() +this.securityObject.expirationTimestamp);
          //}
          //alert("afret assign "+this.securityObject.isAuthenticated);
          
          this.hasChanged.next(0);
        }))
      ;
  }

  logout(): void {
    this.securityObject.init();
    this.hasChanged.next(0);
  }

  
}
