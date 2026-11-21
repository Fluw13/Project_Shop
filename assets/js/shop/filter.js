export function normalizeText(value) {
  return String(value ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLocaleLowerCase('vi-VN');
}

export function filterProducts(products, { query = '', group = 'all', sort = 'featured' } = {}) {
  const needle = normalizeText(query).trim();
  const matches = products.filter(product =>
    (group === 'all' || product.group === group || product.categoryId === group) &&
    (!needle || normalizeText(`${product.name} ${product.categoryName} ${product.groupName}`).includes(needle))
  );
  if (sort === 'price-asc') return matches.sort((a, b) => a.price - b.price);
  if (sort === 'price-desc') return matches.sort((a, b) => b.price - a.price);
  if (sort === 'name') return matches.sort((a, b) => a.name.localeCompare(b.name, 'vi'));
  return matches;
}
