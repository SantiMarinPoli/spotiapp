import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent{

  loading:boolean;
  nuevasCanciones:any[] = [];
  error:boolean;
  mensajeError:string;

  constructor(private Spotify:SpotifyService) {

    this.loading=true;
    this.error = false;

    this.Spotify.getNewReleases()
    .subscribe((data: any )=>{
      console.log(data);
      this.nuevasCanciones = data;
      this.loading = false;

    }, (errorServicio)=>{
      this.loading=false;
      this.error= true;
      console.log(errorServicio);
      this.mensajeError=errorServicio.error.error.message;

    });

  }


}
