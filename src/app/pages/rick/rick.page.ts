import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-rick',
  templateUrl: './rick.page.html',
  styleUrls: ['./rick.page.scss'],
})
export class RickPage implements OnInit {
  characters: any[] = [];
  params = {} as any;
  constructor(private rickAndMortysvc: RickAndMortyService) { }

  ngOnInit() {
    this.params.page = 0;
    this.getCharacters();
  }
  getCharacters(event?: any) {
    this.params.page += 1;
    this.rickAndMortysvc.getCharacters(this.params).subscribe({
      next: (res: any) => {
        this.characters.push(...res.results);
        console.log(this.characters);
        if(event) event.target.complete();
      },
      error: (error: any) => {if(event) event.target.complete();},
    });
  }

  searchCharacters() {
    this.params.page = 1;
    this.rickAndMortysvc.getCharacters(this.params).subscribe({
      next: (res: any) => {
        this.characters = res.results
      },
      error: (error: any) => {},
    });
  }

}
