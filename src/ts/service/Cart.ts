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
    return this._items.reduce((a: number, b: Buyable) => a + b.price, 0);
  }

  getCostWithDiscont(discont: number): number {
    return (1 - discont / 100) * this.getSimpleCost();
  }

  deleteItem(idList: number): boolean {
    if (this._items.some((even) => even.id === idList)) {
      this._items = this._items.filter((member) => member.id !== idList);
      return true;
    }
    return false;
  }
}
