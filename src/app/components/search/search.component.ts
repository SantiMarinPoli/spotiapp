import { Component} from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {


  loading:boolean;
  artistas:any[]=[];

  constructor(private Spotify:SpotifyService) { }

  buscar(termino:string){

    this.loading = true;
  	console.log(termino);
  	this.Spotify.getArtistas(termino).subscribe((data:any)=>{
  	console.log(data);
  	this.artistas = data;
    this.loading = false;
  	});

  }


}
