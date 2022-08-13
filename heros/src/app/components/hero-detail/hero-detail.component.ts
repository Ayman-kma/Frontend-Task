import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../Hero'
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../services/hero.service'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero!: Hero;

  constructor(private route: ActivatedRoute,
    private heroService: HeroService,
  ) { }

  ngOnInit(): void {
    let id = + this.route.snapshot.params['id'];
    console.log(id);

    this.heroService.getHeroById(id).subscribe((hero) => {
      this.hero = hero
    });
  }

}
