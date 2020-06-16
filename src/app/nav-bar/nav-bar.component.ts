import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service'
import { User } from '../common/user'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  user: User;
  
  constructor(private loginService: LoginService) {
    this.user = new User();
    this.user.username = loginService.currentUserValue.username;
    this.user.username = loginService.currentUserValue.password;
  }

  ngOnInit() {
  }

  logout() {
    this.loginService.logout();
    // this.router.navigate(['/login']); // replaced with href="/login"
  }

}
