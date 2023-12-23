import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingItemsService {

  public items: string[] = [];
  public isEmpty: boolean = true;


  addItem(item: string): void {

    this.items.push(item);
    this.isEmpty = false;
  }

  removeItem(item: string): void {

    const index = this.items.findIndex(elem => elem.toLowerCase().trim() === item.toLowerCase().trim());
    if (index !== -1) this.items.splice(index, 1);
    if (this.items.length === 0) this.isEmpty = true;
  }

  removeAllItems(): void {
    this.items = [];
  }

  existsItem(item: string): string {
    return this.items.find(elem => elem.toLowerCase().trim() === item.toLowerCase().trim()) || "";
  }
}

