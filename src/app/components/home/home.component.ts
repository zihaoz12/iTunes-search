import { Component, OnInit } from '@angular/core';
import { AlbumsService } from 'src/app/services/albums.service';
import { Album } from '../../interface/album';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  albums:any = [];


  constructor(
    private albumService: AlbumsService
  ) { }

  ngOnInit(): void {
  }

  getSongsByName(value){
    this.albumService.getSongs(value).subscribe( data=>{
      this.albums = data;
      console.log(this.albums)
    })
  }



}
