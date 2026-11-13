import { IProduct } from '../../types/index';

export class CartModel {
  private items: IProduct[];

  constructor () {
    this.items = [];
  }

  addProduct(product: IProduct): void {
    this.items.push(product);
  }

  //удаляет товар из корзины по идентификатору
  removeProduct(id: string): void {
    this.items = this.items.filter(product => product.id !== id);
  }

  //возвращает список товаров в корзине
  getProducts(): IProduct[] {
    return this.items;
  }

  //возвращает количество товаров
  getCount(): number {
    return this.items.length;
  }

  //возвращает сумму стоимостей товаров
  getTotal(): number {
    return this.items.reduce((total, product) => total + (product.price ?? 0), 0);
  }

  //проверяет наличие товара в корзине
  hasProduct(id: string): boolean {
    return this.items.some(product => product.id === id);
  }

  // очищает корзину
  clear(): void {
    this.items = [];
  }

}