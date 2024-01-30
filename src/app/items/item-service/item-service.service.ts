import { Observable, map, switchMap, tap } from 'rxjs';
import { FakeBackendService } from '../../services/fake-backend.service';
import { Item, ItemStatus } from '../../interfaces/item-card.interface';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ItemService {
  constructor(private readonly backend: FakeBackendService) {}

  get(): Observable<Item[]> {
    return this.backend.getAllItems();
  }

  save(items: Item[]): Observable<boolean> {
    return this.backend.saveAllItems(items);
  }

  updateStatus(item: Item, status: ItemStatus): void {
    this.get()
      .pipe(
        map((items) => {
          const index = items.findIndex((i) => i.id === item.id);
          items[index].status = status;
          return items;
        }),
        switchMap((items) => this.save(items))
      )
      .subscribe();
  }
}
