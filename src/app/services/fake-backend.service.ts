import { Observable, of } from 'rxjs';
import { Item, ItemStatuses } from '../interfaces/item-card.interface';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FakeBackendService {
  itemStorageKey = 'todo-items';

  constructor() {
    this.seedItems();
  }

  getAllItems(): Observable<Item[]> {
    try {
      return of(JSON.parse(localStorage.getItem(this.itemStorageKey) || '[]'));
    } catch (e) {
      return of([]);
    }
  }

  saveAllItems(items: Item[]): Observable<boolean> {
    try {
      localStorage.setItem(this.itemStorageKey, JSON.stringify(items));
      return of(true);
    } catch (e) {
      return of(false);
    }
  }

  seedItems() {
    this.getAllItems().subscribe((items) => {
      if (!items.length) {
        const todoItems: Item[] = Array.from({ length: 5 }, (_, i) => ({
          id: i + 1,
          title: `Item ${i + 1}`,
          description: `This is item ${i + 1}`,
          status: ItemStatuses.TODO,
          createdAt: new Date(),
          updatedAt: new Date(),
        }));

        const inProgressItems: Item[] = Array.from({ length: 5 }, (_, i) => ({
          id: i + 6,
          title: `Item ${i + 6}`,
          description: `This is item ${i + 6}`,
          status: ItemStatuses.IN_PROGRESS,
          createdAt: new Date(),
          updatedAt: new Date(),
        }));

        const doneItems: Item[] = Array.from({ length: 5 }, (_, i) => ({
          id: i + 11,
          title: `Item ${i + 11}`,
          description: `This is item ${i + 11}`,
          status: ItemStatuses.DONE,
          createdAt: new Date(),
          updatedAt: new Date(),
        }));

        const allItems = [...todoItems, ...inProgressItems, ...doneItems];

        this.saveAllItems(allItems).subscribe();
      }
    });
  }
}
