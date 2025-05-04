import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  isAdmin = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isAdmin = this.router.url.includes('/admin');
  }

}
