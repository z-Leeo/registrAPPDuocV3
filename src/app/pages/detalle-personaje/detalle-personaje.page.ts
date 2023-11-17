import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-detalle-personaje',
  templateUrl: './detalle-personaje.page.html',
  styleUrls: ['./detalle-personaje.page.scss'],
})
export class DetallePersonajePage implements OnInit {

  characterId: string = '';
  character = null as any;
  episodes: any[] = [];

  constructor(
    private actRoute: ActivatedRoute,
    private rickAndMortysvc: RickAndMortyService
  ) {
    this.characterId = this.actRoute.snapshot.paramMap.get('id') as string
    console.log(this.characterId);
  }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.getCharacter()
  }
    getCharacter() {
    this.rickAndMortysvc.getCharacterById(this.characterId).subscribe({ 
      next: (res: any) => {
        this.character = res;
        this.getEpisodes()
      },
      error: (error: any) => {

      },
    });
  }

  getEpisodes() {

    for(let url of this.character.episode){
      this.rickAndMortysvc.getByUrl(url).subscribe({ 
        next: (res: any) => {
          console.log(res);
          this.episodes.push(res)
        },
        error: (error: any) => {
  
        },
      });
    }
  }

}
