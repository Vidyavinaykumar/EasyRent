import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousesService } from '../houses.service';
import { House } from '../houses';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-view-house',
  standalone: false,
  templateUrl: './view-house.component.html',
  styleUrls: ['./view-house.component.css'] // Note: styleUrl → styleUrls
})
export class ViewHouseComponent implements OnInit {
  id:any;
  house:any;

  constructor(private route: ActivatedRoute, private router: Router, private houseService: HousesService,private wishlistService: WishlistService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.house = this.houseService.getHouseById(id);
    }
  }
  addToWishlist() {
    if (this.house) {
      this.wishlistService.addToWishlist(this.house);
      alert("Added to wishlist!");
      this.router.navigate(['/user/wishlist']);
    }
  }

  // ngOnInit(): void {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   this.house = this.houseService.getHouseById(id);
  //   console.log(this.house);
  // }

  // ngOnInit(): void {
  //   const idParam = this.route.snapshot.paramMap.get('id');
  //   this.id = idParam ? +idParam : 0; // Convert string to number
  //   this.house = this.houseService.getHouseById(this.id);
  // }
}
