import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userInfo = {
    name: 'Juan Lopez',
    imgUrl: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/male-512.png',
    dniUrl: 'https://mswordidcards.com/wp-content/uploads/2017/11/Employee-id-45-CRC.jpg'
  };
  constructor() { }

  ngOnInit() {
  }

}
