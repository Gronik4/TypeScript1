import Buyable from './Buyable';

/**
 * @module user;
 */

/**
 * Load user info by id;
 *
 * @param {number} id user id;
 * @returns {Object} user info;
 */
export default class Book implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly author: string,
    readonly price: number,
    readonly pages: number,
  ) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.price = price;
    this.pages = pages;
  }
}
