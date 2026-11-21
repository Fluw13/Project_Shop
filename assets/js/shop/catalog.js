import { KimetsunoYaiba } from '../asset.pages/list-shirt/kimestu-no-yaiba.js';
import { AttackonTitan } from '../asset.pages/list-shirt/attack-on-titan.js';
import { Adidas } from '../asset.pages/list-shoe/adidas.js';
import { AirForce1 } from '../asset.pages/list-shoe/air-force-1.js';
import { Ring } from '../asset.pages/list-accessorry/ring.js';
import { Watch } from '../asset.pages/list-accessorry/watch.js';
import { parsePrice } from './money.js';

export const categories = Object.freeze([
  { id: 'kimestu-no-yaiba', name: 'Kimetsu no Yaiba', group: 'shirt', groupName: 'Thời trang', path: 'pages/shop/list-shirt/kimestu-no-yaiba.html', items: KimetsunoYaiba },
  { id: 'attack-on-titan', name: 'Attack on Titan', group: 'shirt', groupName: 'Thời trang', path: 'pages/shop/list-shirt/attack-on-titan.html', items: AttackonTitan },
  { id: 'adidas', name: 'Adidas', group: 'shoe', groupName: 'Giày dép', path: 'pages/shop/list-shoe/adidas.html', items: Adidas },
  { id: 'air-force-1', name: 'Air Force 1', group: 'shoe', groupName: 'Giày dép', path: 'pages/shop/list-shoe/air-force-1.html', items: AirForce1 },
  { id: 'ring', name: 'Nhẫn', group: 'accessory', groupName: 'Phụ kiện', path: 'pages/shop/list-accessory/ring.html', items: Ring },
  { id: 'watch', name: 'Đồng hồ', group: 'accessory', groupName: 'Phụ kiện', path: 'pages/shop/list-accessory/watch.html', items: Watch }
]);

export const products = Object.freeze(categories.flatMap(category =>
  category.items.map(item => {
    const relativeImage = String(item.img ?? '');
    const at = relativeImage.indexOf('assets/img/');
    return Object.freeze({
      id: `${category.id}-${item.id}`,
      name: item.name,
      price: parsePrice(item.price),
      image: at >= 0 ? relativeImage.slice(at) : '',
      categoryId: category.id,
      categoryName: category.name,
      group: category.group,
      groupName: category.groupName,
      categoryPath: category.path
    });
  })
));

export function getProductById(id) {
  return products.find(product => product.id === id) ?? null;
}

export function getCategory(id) {
  return categories.find(category => category.id === id) ?? null;
}
