import Buyable from './Buyable';

export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly year: number,
    readonly country: string,
    readonly slogan: string,
    readonly genre: string,
    readonly duration: string,
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.year = year;
    this.country = country;
    this.slogan = slogan;
    this.genre = genre;
    this.duration = duration;
  }
}
