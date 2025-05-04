import { Component } from '@angular/core';
import { HousesService } from '../houses.service';
import { Router } from '@angular/router';
import { House } from '../houses';

@Component({
  selector: 'app-manage-houses',
  standalone: false,
  templateUrl: './manage-houses.component.html',
  styleUrl: './manage-houses.component.css'
})
export class ManageHousesComponent {
  houses: House[] = [];

  constructor(private houseService: HousesService, private router: Router) {}

  ngOnInit(): void {
    this.houses = this.houseService.getAllHouses();
  }

  editHouse(id: number): void {
    this.router.navigate(['/admin/edit', id]);
    // this.router.navigate(['/admin/manage', id]);
  }

  deleteHouse(id: number): void {
    const confirmDelete = confirm('Are you sure you want to delete this house?');
    if (confirmDelete) {
      this.houseService.deleteHouse(id);
      this.houses = this.houseService.getAllHouses(); // refresh
    }
  }

  // ngOnInit(): void {
  //   this.loadHouses();
  // }

  // loadHouses(): void {
  //   this.houses = this.houseService.getAllHouses();
  // }

  // onEdit(houseId: number): void {
  //   this.router.navigate(['/admin/edit-house', houseId]);
  // }

  // onDelete(houseId: number): void {
  //   this.houseService.deleteHouse(houseId);
  //   this.loadHouses(); // refresh list
  // }

  // onAdd(): void {
  //   this.router.navigate(['/admin/edit-house']); // new house
  // }

}
