import './scss/styles.scss';
import { Api } from './components/base/Api';
import { CatalogModel } from './components/models/CatalogModel';
import { CartModel } from './components/models/CartModel';
import { BuyerModel } from './components/models/BuyerModel';
import { CommunicationLayer } from './components/models/CommunicationLayer';
import { apiProducts } from './utils/data';
import { API_URL } from './utils/constants';

const catalog = new CatalogModel();
const cart = new CartModel();
const buyer = new BuyerModel();

//CatalogModel
catalog.setProducts(apiProducts.items);
console.log('Каталог из модели:', catalog.getProducts());
console.log('Товар по id:', catalog.getProduct(apiProducts.items[0].id));
console.log('Несуществующий id:', catalog.getProduct('fake-id'));
catalog.setSelectedProduct(apiProducts.items[0]);
console.log('Выбранный товар:', catalog.getSelectedProduct());
catalog.setSelectedProduct(null);
console.log('Выбранный товар после сброса (ожидаем null):', catalog.getSelectedProduct());

//CartModel
cart.addProduct(apiProducts.items[0]);
console.log('Корзина:', cart.getProducts(), '— количество:', cart.getCount(), '— сумма:', cart.getTotal());
console.log('Товар в корзине:', cart.hasProduct(apiProducts.items[0].id));
cart.removeProduct(apiProducts.items[0].id);
console.log('После удаления:', cart.getProducts(), '— сумма:', cart.getTotal());
cart.clear();
console.log('После clear():', cart.getProducts());

//BuyerModel
buyer.setData({ payment: 'card' });
buyer.setData({ email: 'test@example.ru' });
console.log('Данные покупателя (payment сохранён):', buyer.getData());
console.log('Ошибки валидации:', buyer.validate());
buyer.setData({ address: 'СПб, Невский проспект, 1', phone: '+7 999 000-00-00' });
console.log('Ошибки после дозаполнения:', buyer.validate());
buyer.clear();
console.log('После clear():', buyer.getData());

//CommunicationLayer
const api = new Api(API_URL);
const communicationLayer = new CommunicationLayer(api);

communicationLayer.getProducts()
  .then((data) => {
    catalog.setProducts(data.items);
    console.log('Каталог, полученный с сервера:', catalog.getProducts());
  })
  .catch((err) => console.error('Ошибка загрузки каталога:', err));