import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user$ = this.usersService.currentUserProfile$;
  public isLoggedId = false;

  constructor(
    private usersService: UsersService,
    private authService: AuthService
  ) {
   
  }

  ngOnInit(): void {}

  logout() {
    this.authService.logout();
  }

}
