import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  constructor(private herService: HeroService, 
    private route: ActivatedRoute, 
    private location: Location, 
    private toastr: ToastrService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getHero(id); 
  }

  getHero(id: string) {
    this.herService.getHero(id).subscribe(
      hero => this.hero = hero
      
    )
  }
  goBack() {
    this.location.back(); 
  }
  save() {
    const id = this.route.snapshot.paramMap.get('id');
    this.herService.updateHero(this.hero, id).subscribe(
      () => {
        this.goBack(),
        this.toastr.success(`Updated`)
      }
    );
  }
}
