import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  constructor(private heroService: HeroService,private toastr: ToastrService ) { }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void{
    this.heroService.getHeroes().subscribe(
      heroes => this.heroes = heroes
    )
  }
  delete(id: string){
    this.heroService.deleteHero(id).subscribe(
      () => {
        this.getHeroes();
        this.toastr.success('Deleted')
      } 
    )
  }
  searchHero(name: string){
    name ? this.heroService.searchHero(name).subscribe(heroes => this.heroes = heroes) : this.getHeroes();
  }
}
