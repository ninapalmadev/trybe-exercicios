export type Product = {
  barcode: string,
  price: number,
};


function getProduct(): Product {
  const product: Product = {
    barcode: '123c456b789a',
    price: 29.90,
  }
  return product;
}

console.log(getProduct());