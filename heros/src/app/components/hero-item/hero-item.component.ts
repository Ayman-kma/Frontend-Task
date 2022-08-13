import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../Hero'
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.css']
})

export class HeroItemComponent implements OnInit {
  @Input() hero!: Hero;
  constructor(private router: Router,) { }


  viewDetails() {
    this.router.navigate([`/item/${this.hero.name}`]);
  }
  ngOnInit(): void {
  }

}
