import { PipeTransform, Pipe } from "@angular/core";
import { Hero } from "src/app/Hero";
import { HerosComponent } from "./heroes.component"
@Pipe({
    name: "sort"
})
export class HeroSortPipe implements PipeTransform {
    transform(heroes: any[], order: string): Hero[] {
        console.log(order);
        if (!heroes || !order)
            return heroes
        heroes.sort((heroA: any, heroB: any) => {
            console.log(heroA.name);
            console.log(heroA.order);
            if (heroA.order < heroB.order) {
                return -1;
            } else if (heroA.order > heroB.order) {
                return 1;
            } else {
                return 0;
            }
        });
        return heroes;
    }
}