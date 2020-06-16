import { Component, OnInit, Input } from '@angular/core';

import  { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from './login.service';
import { User } from '../common/user';
import { TokenHolder } from '../common/token-holder';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User;
  tokenHolder: TokenHolder;
  showErrorMsg: boolean;
  returnUrl: string;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.user = new User();
    this.tokenHolder = new TokenHolder();
  }

  ngOnInit() {
    var d = new Date();
    console.log("401 force logout at : " + d.toLocaleDateString() + " " + (d.getHours()-1) + ":" + d.getMinutes() + ":" + d.getSeconds());
    
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/allBuses';
  }

  private authenticationSubscription(tokenHolder: TokenHolder) {
    this.tokenHolder = tokenHolder;
    // console.log('token is : ' + this.tokenHolder.token);
    // console.log('Token Holder is : ' + this.tokenHolder);
    if(this.tokenHolder){
      // console.log('returnUrl : ' + this.returnUrl);
      this.router.navigate([this.returnUrl]).then( (e) => {
        e ? console.log("Navigation is successful!") : console.log("Navigation has failed!");
      });
    }else{
      this.showErrorMsg = true;
    }
  }

  authenticate(): void {
    // console.log('userName : ' + this.user.username);
    // console.log('password : ' + this.user.password);
    this.loginService.authenticate(this.user)
      .subscribe(tokenHolder => this.authenticationSubscription(tokenHolder));
  }

  reset(): void {
    this.user = new User();
  }

}
