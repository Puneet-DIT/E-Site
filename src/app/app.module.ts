import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { userReducer } from './store/reducers/user.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    PagesModule, 
    BrowserAnimationsModule, 
    NgbModule, 
    StoreModule.forRoot({
      userList: userReducer
    } as ActionReducerMap<any, any>),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
