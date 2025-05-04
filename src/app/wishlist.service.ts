import { Injectable } from '@angular/core';
import { House } from './houses';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlist: House[] = [];

  addToWishlist(house: House): void {
    if (!this.wishlist.find(h => h.id === house.id)) {
      this.wishlist.push(house);
    }
  }

  removeFromWishlist(id: number): void {
    this.wishlist = this.wishlist.filter(h => h.id !== id);
  }

  getWishlist(): House[] {
    return this.wishlist;
  }

  clearWishlist(): void {
    this.wishlist = [];
  }

  constructor() { }
}
