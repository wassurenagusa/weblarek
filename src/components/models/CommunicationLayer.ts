import { IApi, IProductsResponse, IOrder, IOrderResult } from '../../types/index';

export class CommunicationLayer {
  private api: IApi;

  constructor(api: IApi) {
    this.api = api;
  }

  getProducts(): Promise<IProductsResponse> {
    return this.api.get<IProductsResponse>('/product/');
  }

  postOrder(data: IOrder): Promise<IOrderResult> {
    return this.api.post<IOrderResult>('/order/', data);
  }
}