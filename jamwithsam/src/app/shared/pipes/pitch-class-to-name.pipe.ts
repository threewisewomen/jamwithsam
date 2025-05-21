import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pitchClassToName'
})
export class PitchClassToNamePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
