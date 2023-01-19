import { Heroe } from './../interfaces/heroes.interfaces';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen',
})
export class ImagenPipe implements PipeTransform {
  transform(heroe: Heroe): string {
    return `assets/heroes/${heroe.id}.jpg`;
  }
}
