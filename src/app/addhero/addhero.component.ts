import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import {Location} from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addhero',
  templateUrl: './addhero.component.html',
  styleUrls: ['./addhero.component.scss']
})
export class AddheroComponent implements OnInit {
  hero: Hero;
  constructor(private heroService: HeroService, private location: Location, private toastr: ToastrService ) { }

  ngOnInit() {
  }
  addHero(name: string){
    name = name.trim();
    if(!name) return;
    this.heroService.addHero({name} as Hero).subscribe(
      () => this.toastr.success(`Add ${name} success`)
    ); 
  }
  onBack(){
    this.location.back();
  }
}
