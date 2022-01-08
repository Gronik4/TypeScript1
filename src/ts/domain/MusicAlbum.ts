import Buyable from './Buyable';

export default class MusicAlbum implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly author: string,
    readonly price: number,
  ) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.price = price;
  }
}
