import { IProduct } from '../../types/index';

export class CartModel {
  _items: IProduct[];

  constructor () {
    this._items = [];
  }

  addProduct(product: IProduct): void {
    this._items.push(product);
  }

  //удаляет товар из корзины по идентификатору
  removeProduct(id: string): void {
    this._items = this._items.filter(product => product.id !== id);
  }

  //возвращает список товаров в корзине
  getProducts(): IProduct[] {
    return this._items;
  }

  //возвращает количество товаров
  getCount(): number {
    return this._items.length;
  }

  //возвращает сумму стоимостей товаров
  getTotal(): number {
    return this._items.reduce((total, product) => total + (product.price ?? 0), 0);
  }

  //проверяет наличие товара в корзине
  hasProduct(id: string): boolean {
    return this._items.some(product => product.id === id);
  }

  // очищает корзину
  clear(): void {
    this._items = [];
  }

}