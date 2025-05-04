import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousesService } from '../houses.service';
import { House } from '../houses';

@Component({
  selector: 'app-edit-house',
  standalone: false,
  templateUrl: './edit-house.component.html',
  styleUrls: ['./edit-house.component.css']
})
export class EditHouseComponent implements OnInit {
  house: House = {
    id: 0,
    title: '',
    location: '',
    price: 0,
    description: '',
    image: []
  };

  constructor(
    private route: ActivatedRoute,
    private houseService: HousesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const existingHouse = this.houseService.getHouseById(id);
    if (existingHouse) {
      this.house = { ...existingHouse }; // clone to avoid editing directly
    }
  }

  updateHouse(): void {
    this.houseService.updateHouse(this.house);
    alert('House updated successfully!');
    this.router.navigate(['/admin/manage']);
  }
}










// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { HousesService } from '../houses.service';
// import { House } from '../houses';

// @Component({
//   selector: 'app-edit-house',
//   standalone: false,
//   templateUrl: './edit-house.component.html',
//   styleUrl: './edit-house.component.css'
// })
// export class EditHouseComponent {
//   houseForm!: FormGroup;
//   isEditMode = false;
//   houseId!: number;

//   constructor(
//     private fb: FormBuilder,
//     private route: ActivatedRoute,
//     private houseService: HousesService,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     this.houseId = +this.route.snapshot.paramMap.get('id')!;
//     this.isEditMode = !!this.houseId;

//     this.houseForm = this.fb.group({
//       title: ['', Validators.required],
//       location: ['', Validators.required],
//       price: [0, Validators.required],
//       image: ['', Validators.required],
//       description: ['']
//     });

//     if (this.isEditMode) {
//       const house = this.houseService.getHouseById(this.houseId);
//       if (house) {
//         this.houseForm.patchValue(house);
//       }
//     }
//   }

//   onSubmit(): void {
//     const house: House = {
//       id: this.isEditMode ? this.houseId : 0,
//       ...this.houseForm.value
//     };

//     if (this.isEditMode) {
//       this.houseService.updateHouse(house);
//     } else {
//       this.houseService.addHouse(house);
//     }

//     this.router.navigate(['/admin/manage-houses']);
//   }

// }
