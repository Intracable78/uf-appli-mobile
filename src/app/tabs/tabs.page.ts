import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private authService: AuthService,
    private router: Router) { }

  isLogged() {
    return this.authService.isLogged();
  }

  disconnect() {
    localStorage.removeItem('data');
    this.router.navigate(['/'])

  }

}
