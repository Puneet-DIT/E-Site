import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isCategoriesOpen: boolean = false;
  isLoggedIn: boolean = false;
  isOpen: boolean = false;

  name!: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    let isL = localStorage.getItem('isLoggedIn');
    if (isL != null && isL == 'true') {
      this.isLoggedIn = true;
      this.name = localStorage.getItem('Name') || '';
    }
  }

  OpenCategoriesList() {
    this.isCategoriesOpen = !this.isCategoriesOpen;
  }

  close() {
    this.isOpen = false;
  }

  btnClick() {
    this.isOpen = !this.isOpen;
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/']);
    });
  }
}