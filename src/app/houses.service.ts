import { Injectable } from '@angular/core';
import { House } from './houses';

@Injectable({
  providedIn: 'root'
})
export class HousesService {
  // generateNewId(): any {
  //   throw new Error('Method not implemented.');
  // }
  // getVehiclesById(houseid: any): any {
  //   throw new Error('Method not implemented.');
  // }
  private houses: House[] = [
      {
        id: 1,
        title: '2 BHK Flat in Hyderabad',
        location: 'Banjara Hills',
        price: 20000,
        image: [
          'https://pix10.agoda.net/hotelImages/28139269/0/a527ac179447ac5aa63f2335dc2f1029.jpg?ca=25&ce=0&s=414x232&ar=16x9',
          'https://res.cloudinary.com/brickandbatten/images/w_464,h_283,dpr_2/f_auto,q_auto/v1713267421/wordpress_assets/313364-Alabaster-Caviar-TeakStain-A-copy/313364-Alabaster-Caviar-TeakStain-A-copy.jpg?_i=AA'
        ],
        description: 'Spacious house in prime location.',
      },
      {
        id: 2,
        title: '3 BHK Villa in Jubilee Hills',
        location: 'Jubilee Hills',
        price: 50000,
        image: ['https://i0.wp.com/civillane.com/wp-content/uploads/2021/12/Cost-of-3bhk-apartment-interior-design-civillane.jpg?fit=1280%2C720&ssl=1'],
        description: 'Luxury villa with garden and parking.',
      },
      {
        id: 3,
        title: '1 BHK Apartment in Gachibowli',
        location: 'Gachibowli',
        price: 15000,
        image: ['https://media.designcafe.com/wp-content/uploads/2021/03/06173404/elegant-living-room-design-with-cosy-sofa-in-1bhk-apartment-design.jpg'],
        description: 'Ideal for working professionals.',
      },
      {
        id: 4,
        title: '2 BHK in Hitech City',
        location: 'Hitech City',
        price: 22000,
        image: ['https://media.designcafe.com/wp-content/uploads/2021/06/30135419/modern-1bhk-home-living-room-designed-with-comfortable-couch-and-tv-unit.jpg'],
        description: 'Modern amenities and close to IT hub.',
      },
      {
        id: 5,
        title: '3 BHK Duplex in Kondapur',
        location: 'Kondapur',
        price: 28000,
        image: ['https://images.homify.com/v1511244210/p/photo/image/2327234/1.jpg'],
        description: 'Well-connected and family-friendly.',
      },
      {
        id: 6,
        title: '2 BHK Flat in Madhapur',
        location: 'Madhapur',
        price: 24000,
        image: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWaxsoWvDpZEV2BJTNE7UqdbFxu0fh8hcA-Q&s'],
        description: 'Walkable to major IT offices.',
      },
      {
        id: 7,
        title: '1 BHK Studio in Somajiguda',
        location: 'Somajiguda',
        price: 18000,
        image: ['https://asset-cdn.stanzaliving.com/stanza-living/image/upload/f_auto,q_auto,w_600/e_improve/e_sharpen:10/e_saturation:10/v1669877286/Website/CMS-Uploads/IMG_0487_8_9_ysbyb8.jpg'],
        description: 'Compact and fully furnished.',
      },
      {
        id: 8,
        title: '4 BHK Independent House in Film Nagar',
        location: 'Film Nagar',
        price: 60000,
        image: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJf0-yuwOiU-MND7VTJpuv2h1zY3v4z04pBw&s'],
        description: 'Spacious bungalow with private lawn.',
      },
      {
        id: 9,
        title: '2 BHK Apartment in Begumpet',
        location: 'Begumpet',
        price: 21000,
        image: ['https://cf.bstatic.com/xdata/images/hotel/max1024x768/508679021.jpg?k=d2388bb4ef75ed12a936e938921ae8bb5a5b96e8e6e787eed0fdaa5921fc9163&o=&hp=1'],
        description: 'Close to metro and shopping areas.',
      },
      {
        id: 10,
        title: '3 BHK in Manikonda',
        location: 'Manikonda',
        price: 25000,
        image: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnh_xkgPDh9L0lBoy7eDlJGEx45Tq9cinviA&s'],
        description: 'Quiet and gated community.',
      },
      {
        id: 11,
        title: '2 BHK in Kukatpally',
        location: 'Kukatpally',
        price: 20000,
        image: ['https://imagecdn.99acres.com/media1/29162/9/583249409M-1743684784866.jpg'],
        description: 'Affordable and near metro station.',
      },
      {
        id: 12,
        title: '1 BHK in Ameerpet',
        location: 'Ameerpet',
        price: 12000,
        image: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBt8MXd1kzFNkLHI3cXcfWufLvxABHsMQhHA&s'],
        description: 'Good for students and bachelors.',
      },
      {
        id: 13,
        title: '3 BHK Villa in Narsingi',
        location: 'Narsingi',
        price: 32000,
        image: ['https://images.homify.com/v1511244210/p/photo/image/2327234/1.jpg'],
        description: 'Modern villa with clubhouse access.',
      },
      {
        id: 14,
        title: '2 BHK Flat in Miyapur',
        location: 'Miyapur',
        price: 19000,
        image: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0fet1CpdhFBsN08wJ8Px-d9SXIjXzkYbReQ&s'],
        description: 'Close to schools and supermarkets.',
      },
      {
        id: 15,
        title: '3 BHK in Tolichowki',
        location: 'Tolichowki',
        price: 23000,
        image: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoOPXH4wEpnq0SQZvSZ4vzLQQu0bSZsFgBhA&s'],
        description: 'Peaceful location with easy commute.',
      },
      {
        id: 16,
        title: '2 BHK Flat in Mehdipatnam',
        location: 'Mehdipatnam',
        price: 18000,
        image: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSodJMq00zxaFi_5QFGCwC0_8AxrxZuxbxvYQ&s'],
        description: 'Convenient for families and students.',
      },
      {
        id: 17,
        title: '3 BHK in Uppal',
        location: 'Uppal',
        price: 20000,
        image: ['https://media.designcafe.com/wp-content/uploads/2021/11/22201407/living-room-middle-class-indian-home-interior-design-with-cosy-vibes.jpg'],
        description: 'Upcoming area with metro access.',
      },
      {
        id: 18,
        title: '2 BHK Flat in LB Nagar',
        location: 'LB Nagar',
        price: 17500,
        image: ['https://rtrealtors.com/wp-content/uploads/2023/08/Traditional-Indian-middle-class-Small-House-living-room.jpg'],
        description: 'Great connectivity to all city zones.',
      },
      {
        id: 19,
        title: '1 BHK in Tarnaka',
        location: 'Tarnaka',
        price: 13000,
        image: ['https://i.pinimg.com/736x/b1/2f/a9/b12fa979cc3aa87fbf63f6e9b9d2f43c.jpg'],
        description: 'Perfect for students and young couples.',
      },
      {
        id: 20,
        title: '3 BHK in Attapur',
        location: 'Attapur',
        price: 22000,
        image:[ 'https://media.designcafe.com/wp-content/uploads/2021/11/22201541/borrow-inspiration-from-this-living-room-middle-class-indian-home-interior-design.jpg'],
        description: 'Near shopping malls and hospitals.',
      }
    ];
    getAllHouses(): House[] {
      return this.houses;
    }

    getHouseById(id: number): House | undefined {
      return this.houses.find(h => h.id === Number(id));
    }
  
    // getHouseById(id: number): House | undefined {
    //   return this.houses.find(h => h.id === id);
    // }

    addHouse(house: House) {
      this.houses.push(house);
    }

    generateNewId(): number {
      return this.houses.length > 0 ? Math.max(...this.houses.map(h => h.id)) + 1 : 1;
    }
  
    // addHouse(house: House) {
    //   this.houses.push({ ...house, id: Date.now() });
    // }

    updateHouse(updated: House): void {
      const index = this.houses.findIndex(h => h.id === updated.id);
      if (index !== -1) {
        this.houses[index] = updated;
      }
    }
    
  
    // updateHouse(house: House) {
    //   const index = this.houses.findIndex(h => h.id === house.id);
    //   if (index !== -1) this.houses[index] = house;
    // }
  
    deleteHouse(id: number) {
      this.houses = this.houses.filter(h => h.id !== id);
    }
    

  constructor() { }
}
