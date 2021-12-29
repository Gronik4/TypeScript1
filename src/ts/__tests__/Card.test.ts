import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  let cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('new card with Movie', () => {
  const cart = new Cart();
  let id = 1;
  let name = 'Matrix';
  let price = 100;
  let year = 1999;
  let country = 'USA-Australien';
  let slogan = 'Добро пожаловать в реальный мир';
  let genre = 'Фантастический боевик';
  let duration = '136 мин';
  const matrix = new Movie(id, name, price, year, country, slogan, genre, duration);
  cart.add(matrix);
  id = 2
  name = 'Lucy';
  price = 120;
  year = 2014;
  country = 'Франция, Германия, Канада, США, Великобритания';
  slogan = 'Добро пожаловать в реальный мир';
  genre = 'Фантастический боевик';
  duration = '89 мин';
  const lusy = new Movie(id, name, price, year, country, slogan, genre, duration);
  cart.add(lusy);
  const discount = 10;
  expect(cart.items.length).toBe(2);
  expect(cart.getSimpleCost()).toBe(220);
  expect(cart.getCostWithDiscont(discount)).toBe((1 - discount/100) * 220);
  expect(cart.deleteItem(1)).toBe(true);
  expect(cart.deleteItem(1)).toBe(false);
})
