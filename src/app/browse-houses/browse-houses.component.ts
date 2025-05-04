import { Component } from '@angular/core';
import { House } from '../houses';
import { HousesService } from '../houses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse-houses',
  standalone: false,
  templateUrl: './browse-houses.component.html',
  styleUrl: './browse-houses.component.css'
})
export class BrowseHousesComponent {
  houses: House[] = [];

  constructor(private houseService: HousesService, private router: Router) {}

  ngOnInit(){
    this.houses = this.houseService.getAllHouses();
  }

  viewHouseDetails(id:any) {
    this.router.navigate(["/user/view/"+id]);
    // console.log(id)
  }

}
