import { Component, inject, signal } from '@angular/core';
import {
  Item,
  ItemStatus,
  ItemStatuses,
} from '../../interfaces/item-card.interface';
import { ItemRowComponent } from '../item-row/item-row.component';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ItemService } from '../item-service/item-service.service';
import { Observable } from 'rxjs';
import { CdkDropListGroup } from '@angular/cdk/drag-drop';
import { FilterItemRowPipe } from './filter-item-row.pipe';

@Component({
  selector: 'app-item-rows',
  templateUrl: './item-rows.component.html',
  styleUrls: ['./item-rows.component.scss'],
  standalone: true,
  imports: [
    ItemRowComponent,
    MatCardModule,
    NgFor,
    NgIf,
    AsyncPipe,
    CdkDropListGroup,
    FilterItemRowPipe,
  ],
})
export class ItemRowsComponent {
  private readonly itemService = inject(ItemService);

  readonly orderedStatuses = [
    ItemStatuses.TODO,
    ItemStatuses.IN_PROGRESS,
    ItemStatuses.DONE,
  ];

  readonly items$: Observable<Item[]> = this.itemService.get();
}
