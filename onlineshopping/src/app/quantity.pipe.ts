import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'qty'
})

export class QuantityPipe implements PipeTransform {

    transform(theQuantity: number, theParameter: string) {
        if (theQuantity == 0) {
            return "Out of Stock!";
        }

        return theQuantity + " " + theParameter;

    }
}