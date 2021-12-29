import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  getSimpleCost(): number {
    return this._items.reduce((a, b) => a + b.price, 0);
  }

  getCostWithDiscont(discont: number): number {
    return (1 - discont / 100) * this.getSimpleCost();
  }

  deleteItem(idList: number): boolean {
    const length = this._items.length;
    const ind = this._items.findIndex((item) => item.id === idList);
    if (ind < 0) { return false; }
    this._items.splice(ind, 1);
    return length - 1 === this._items.length;
  }
}
