import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageHousesComponent } from './manage-houses/manage-houses.component';
import { EditHouseComponent } from './edit-house/edit-house.component';
import { AdminComponent } from './admin/admin.component';
import { BrowseHousesComponent } from './browse-houses/browse-houses.component';
import { ViewHouseComponent } from './view-house/view-house.component';
import { AddHouseComponent } from './add-house/add-house.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'user',component:UserComponent,
    children:[
      { path: 'dashboard', component: DashboardComponent },
      {path:'browse',component:BrowseHousesComponent},
      {path:'view/:id',component:ViewHouseComponent},
      { path: 'wishlist', component: WishlistComponent}



    ]
  },
  {path:'admin',component:AdminComponent,
    children:[
      {path:'dashboard',component:DashboardComponent},
      {path:'manage',component:ManageHousesComponent},
      {path:'edit/:id',component:EditHouseComponent},
      { path:'edit',component: EditHouseComponent },
      { path: 'add', component: AddHouseComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
