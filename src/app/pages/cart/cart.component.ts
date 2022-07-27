import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  state!: AppState;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('userList').subscribe((data: any) => {
      console.log(data);
      
    })
  }



}
