const STORAGE_KEY = 'fluw-shop-cart-v1';
export const MAX_QUANTITY = 20;

function storage() {
  try { return typeof window !== 'undefined' ? window.localStorage : null; }
  catch { return null; }
}

function notify() {
  if (typeof window !== 'undefined') window.dispatchEvent(new Event('fluw:cart-change'));
}

export function getCart() {
  try {
    const value = JSON.parse(storage()?.getItem(STORAGE_KEY) ?? '[]');
    if (!Array.isArray(value)) return [];
    const unique = new Map();
    for (const item of value) {
      if (!item || typeof item.id !== 'string' || !/^[a-z0-9-]+$/.test(item.id)) continue;
      const qty = Number(item.quantity);
      if (!Number.isInteger(qty) || qty < 1) continue;
      unique.set(item.id, Math.min(MAX_QUANTITY, qty));
    }
    return [...unique].map(([id, quantity]) => ({ id, quantity }));
  } catch { return []; }
}

function saveCart(items) {
  try {
    const area = storage();
    if (!area) return false;
    area.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch { return false; }
  notify();
  return true;
}

export function cartCount() {
  return getCart().reduce((sum, item) => sum + item.quantity, 0);
}

export function addToCart(id, quantity = 1) {
  if (typeof id !== 'string' || !/^[a-z0-9-]+$/.test(id)) return false;
  if (!Number.isInteger(quantity) || quantity <= 0) return false;
  const items = getCart();
  const existing = items.find(item => item.id === id);
  if (existing) existing.quantity = Math.min(MAX_QUANTITY, existing.quantity + quantity);
  else items.push({ id, quantity: Math.min(MAX_QUANTITY, quantity) });
  return saveCart(items);
}

export function setQuantity(id, quantity) {
  if (!Number.isInteger(quantity)) return false;
  if (quantity <= 0) return removeFromCart(id);
  const items = getCart();
  const item = items.find(row => row.id === id);
  if (!item) return false;
  item.quantity = Math.min(MAX_QUANTITY, quantity);
  return saveCart(items);
}

export function removeFromCart(id) {
  return saveCart(getCart().filter(item => item.id !== id));
}

export function clearCart() {
  return saveCart([]);
}
