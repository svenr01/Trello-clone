import { Component, input } from '@angular/core';
import { Item } from '../../interfaces/item-card.interface';
import { MatCardModule } from '@angular/material/card';
import { DatePipe } from '@angular/common';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  standalone: true,
  imports: [MatCardModule, DatePipe, CdkDrag],
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent {
  item = input.required<Item>();
}
