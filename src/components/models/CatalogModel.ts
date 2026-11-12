import { IProduct } from '../../types/index';

export class CatalogModel {
    _items: IProduct[];
    _selectedProduct: IProduct | null;

    constructor () {
      this._items = [];
      this._selectedProduct = null;
    }

    setProducts(items: IProduct[]): void {
      this._items = items;
    }

    getProducts(): IProduct[] {
      return this._items;
    }

    getProduct(id: string): IProduct | undefined {
      return this._items.find(item => item.id === id);
    }

    setSelectedProduct(product: IProduct | null): void {
      this._selectedProduct = product;
    }

    getSelectedProduct(): IProduct | null {
      return this._selectedProduct;
    }
}