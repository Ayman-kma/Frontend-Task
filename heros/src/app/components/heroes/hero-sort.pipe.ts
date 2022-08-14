import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: "sort"
})
export class HeroSortPipe implements PipeTransform {
    transform(heroes: any[], order: string): any[] {
        console.log(order);
        if (!heroes || !order)
            return heroes
        heroes.sort((heroA: any, heroB: any) => {
            if (heroA.name < heroB.name) {
                return -1;
            } else if (heroA.name > heroB.name) {
                return 1;
            } else {
                return 0;
            }
        });
        return heroes;
    }
}