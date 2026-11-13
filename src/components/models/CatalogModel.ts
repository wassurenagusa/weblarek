import { IProduct } from '../../types/index';

export class CatalogModel {
    private items: IProduct[];
    private selectedProduct: IProduct | null;

    constructor () {
      this.items = [];
      this.selectedProduct = null;
    }

    setProducts(items: IProduct[]): void {
      this.items = items;
    }

    getProducts(): IProduct[] {
      return this.items;
    }

    getProduct(id: string): IProduct | undefined {
      return this.items.find(item => item.id === id);
    }

    setSelectedProduct(product: IProduct | null): void {
      this.selectedProduct = product;
    }

    getSelectedProduct(): IProduct | null {
      return this.selectedProduct;
    }
}