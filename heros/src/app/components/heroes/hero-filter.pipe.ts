import { PipeTransform, Pipe } from "@angular/core";
import { Hero } from "src/app/Hero";


@Pipe({
    name: 'Herofilter'
})
export class HeroFilterPipe implements PipeTransform {
    transform(heroes: Hero[], searchText: string) {
        if (!heroes || !searchText)
            return heroes
        return heroes.filter(hero =>
            hero.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)
    }

}