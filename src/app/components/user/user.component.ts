import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { DataService } from '../../services/data.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  isHobbiesShown: boolean;
  posts: Post[];

  constructor(private data: DataService) { }

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
    this.data.getPosts().subscribe(res => {
      this.posts = res;
    });
  }

  toggleHobbies() {
    this.isHobbiesShown = !this.isHobbiesShown;
  }

  addHobby(hobby: string) {
    this.hobbies.push(hobby);
  }


}

interface Address {
  street: string;
  city: string;
  country: string;
}

