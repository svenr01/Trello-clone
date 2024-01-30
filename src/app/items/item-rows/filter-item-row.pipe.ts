import { Pipe, PipeTransform } from '@angular/core';
import { Item, ItemStatus } from '../../interfaces/item-card.interface';

@Pipe({
  standalone: true,
  name: 'filterItemRow',
})
export class FilterItemRowPipe implements PipeTransform {
  transform(value: Item[], status: ItemStatus): Item[] {
    return value.filter((item) => item.status === status);
  }
}
