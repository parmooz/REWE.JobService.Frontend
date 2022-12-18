import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppUser } from 'src/app/Common/AppUser';
import { IdentityService } from 'src/app/Common/identity.service';
import { UserAuth } from 'src/app/Common/UserAuth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: AppUser = new AppUser();
  securityObject: UserAuth | undefined;
  returnUrl: string | undefined;

  constructor(private securityService:IdentityService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.returnUrl = params['returnUrl'];
    });
  }

  login() {
    this.securityObject?.init();
    this.securityService.login(this.user)
      .subscribe(resp => {
        localStorage.setItem("AuthObject", JSON.stringify(resp));
        this.securityObject = resp;
        if (this.returnUrl) {
          this.router.navigateByUrl(this.returnUrl);
        }  
      });
  }

}
