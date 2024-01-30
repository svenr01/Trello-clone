import { Component, inject, input } from '@angular/core';
import { Item, ItemStatus } from '../../interfaces/item-card.interface';
import { ItemCardComponent } from '../item-card/item-card.component';
import { NgFor } from '@angular/common';
import {
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ItemService } from '../item-service/item-service.service';

@Component({
  selector: 'app-item-row',
  templateUrl: './item-row.component.html',
  styleUrls: ['./item-row.component.scss'],
  standalone: true,
  imports: [ItemCardComponent, NgFor, CdkDropList],
})
export class ItemRowComponent {
  private readonly itemService = inject(ItemService);

  items = input.required<Item[]>();
  status = input.required<ItemStatus>();

  drop(event: CdkDragDrop<Item[], any, any>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      const newStatus = event.container.id as ItemStatus;
      const item = event.container.data[event.currentIndex];
      this.itemService.updateStatus(item, newStatus);
    }
  }
}
