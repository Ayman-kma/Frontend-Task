import { Component, OnInit, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { Hero } from '../../Hero'
import { HeroService } from '../../services/hero.service'
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HerosComponent implements OnInit {
  heroes: Hero[] = [];
  router!: Router;
  searchText!: "";
  checked = false;
  panelOpenState = false;
  color: ThemePalette = 'accent';

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeros().subscribe((heroes) => {
      this.heroes = heroes
    });

  }

  sortName() {
    this.heroes.sort((heroA: any, heroB: any) => {
      console.log(heroA.name);
      if (heroA.name < heroB.name) {
        return -1;
      } else if (heroA.name > heroB.name) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  sortPower() {
    this.heroes.sort((heroA: any, heroB: any) => {
      console.log(heroA.name);
      if (heroA.power < heroB.power) {
        return -1;
      } else if (heroA.power > heroB.power) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  OnSortToggle() {
    this.checked ? this.sortPower() : this.sortName()
  }





}
