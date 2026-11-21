import test from 'node:test';
import assert from 'node:assert/strict';
import { parsePrice, formatPrice } from '../assets/js/shop/money.js';
import { products, categories, getProductById } from '../assets/js/shop/catalog.js';
import { filterProducts } from '../assets/js/shop/filter.js';
import { addToCart, getCart, setQuantity, removeFromCart, cartCount, MAX_QUANTITY } from '../assets/js/shop/cart.js';

test('prices remain numeric and format for VND', () => {
  assert.equal(parsePrice('22.000.000đ'), 22000000);
  assert.equal(parsePrice('150.000đ'), 150000);
  assert.ok(formatPrice(150000).includes('150.000'));
});

test('preserves all 6 original product collections without duplicate IDs', () => {
  assert.equal(categories.length, 6);
  assert.equal(products.length, 60);
  assert.equal(new Set(products.map(item => item.id)).size, 60);
  assert.ok(products.every(item => item.price > 0 && item.image.startsWith('assets/img/')));
  assert.equal(getProductById('adidas-1')?.categoryName, 'Adidas');
});

test('search ignores accents, filters by group and sorts prices', () => {
  assert.ok(filterProducts(products, { query: 'giay' }).length > 0);
  const onlyShoes = filterProducts(products, { group: 'shoe', sort: 'price-asc' });
  assert.equal(onlyShoes.length, 20);
  assert.ok(onlyShoes.every(item => item.group === 'shoe'));
  assert.ok(onlyShoes.every((item, i) => i === 0 || onlyShoes[i - 1].price <= item.price));
});

test('cart adds, persists, clamps quantity and removes items', () => {
  const data = new Map();
  globalThis.window = {
    localStorage: { getItem: key => data.get(key) ?? null, setItem: (key, value) => data.set(key, value) },
    dispatchEvent: () => true
  };
  assert.equal(addToCart('adidas-1', 2), true);
  assert.equal(addToCart('adidas-1', 3), true);
  assert.equal(cartCount(), 5);
  assert.equal(setQuantity('adidas-1', 100), true);
  assert.equal(getCart()[0].quantity, MAX_QUANTITY);
  assert.equal(removeFromCart('adidas-1'), true);
  assert.equal(getCart().length, 0);
  delete globalThis.window;
});
