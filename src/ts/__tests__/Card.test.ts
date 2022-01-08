import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('new card with Movie', () => {
  const cart = new Cart();
  const matrix = new Movie(
    1,
    'Matrix',
    100,
    1999,
    'USA-Australien',
    'Добро пожаловать в реальный мир',
    'Фантастический боевик',
    '136 мин',
  );
  cart.add(matrix);
  const lusy = new Movie(
    2,
    'Lucy',
    120,
    2014,
    'Франция, Германия, Канада, США, Великобритания',
    'Добро пожаловать в реальный мир',
    'Фантастический боевик',
    '89 мин',
  );
  cart.add(lusy);
  const discount = 10;
  expect(cart.items.length).toBe(2);
  expect(cart.getSimpleCost()).toBe(220);
  expect(cart.getCostWithDiscont(discount)).toBe((1 - discount / 100) * 220);
  expect(cart.deleteItem(1)).toBe(true);
  expect(cart.deleteItem(1)).toBe(false);
});
