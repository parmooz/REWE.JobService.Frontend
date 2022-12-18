import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IdentityService } from './Common/identity.service';
import { UserAuth } from './Common/UserAuth';
import { ConfigurationService } from './Configurations/configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit, OnDestroy {
  title = 'REWE';
  securityObject: UserAuth | undefined;
  subscription: Subscription | undefined;

  

  constructor(private configService: ConfigurationService,
    private securityService: IdentityService) {
    this.securityObject = securityService.securityObject;
  }

  ngOnInit(): void {
    this.configService.getSettings().subscribe(
      settings => this.configService.settings = settings);
    
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription!.unsubscribe();
  }



  logout(): void {
    this.securityService.logout();
    this.securityObject = this.securityService.securityObject;
    localStorage.removeItem("AuthObject");
  }
}