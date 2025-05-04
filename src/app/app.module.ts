import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageHousesComponent } from './manage-houses/manage-houses.component';
import { EditHouseComponent } from './edit-house/edit-house.component';
import { UserComponent } from './user/user.component';
import { BrowseHousesComponent } from './browse-houses/browse-houses.component';
import { ViewHouseComponent } from './view-house/view-house.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddHouseComponent } from './add-house/add-house.component';
import { WishlistComponent } from './wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DashboardComponent,
    ManageHousesComponent,
    EditHouseComponent,
    UserComponent,
    BrowseHousesComponent,
    ViewHouseComponent,
    LoginComponent,
    AddHouseComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
