import { Component } from '@angular/core';
import { HousesService } from '../houses.service';
import { Router } from '@angular/router';
import { House } from '../houses';

@Component({
  selector: 'app-add-house',
  standalone: false,
  templateUrl: './add-house.component.html',
  styleUrl: './add-house.component.css'
})
export class AddHouseComponent {

  house: House = {
    id: 0,
    title: '',
    location: '',
    price: 0,
    description: '',
    image: []
  };

  imageString: string = '';

  constructor(private houseService: HousesService, private router: Router) {}

  addHouse(): void {
    this.house.image = this.imageString.split(',').map(url => url.trim());
    this.house.id = this.houseService.generateNewId();
    this.houseService.addHouse(this.house);
    alert('House added successfully!');
    this.router.navigate(['/admin/manage']);
  }
}
