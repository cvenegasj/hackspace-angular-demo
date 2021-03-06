import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  isHobbiesShown: boolean;

  contructor() {
  }

  ngOnInit() {
    this.name = 'Carlos';
    this.age = 25;
    this.email = 'email@emal.com';
    this.address = {
      street: 'Av. España 534',
      city: 'Truillo',
      country: 'Perú'
    };
    this.hobbies = ['Escuchar música', 'Tocar guitarra', 'Jugar tenis'];
  }

  toggleHobbies() { 
    this.isHobbiesShown = !this.isHobbiesShown;
  }

}

interface Address {
  street: string;
  city: string;
  country: string;
}
