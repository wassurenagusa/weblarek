import './scss/styles.scss';
import { Api } from './components/base/Api';
import { CatalogModel } from './components/models/CatalogModel';
import { CartModel } from './components/models/CartModel';
import { BuyerModel } from './components/models/BuyerModel';
import { CommunicationLayer } from './components/models/CommunicationLayer';
import { apiProducts } from './utils/data';

const catalog = new CatalogModel();
const cart = new CartModel();
const buyer = new BuyerModel();

//CatalogModel
catalog.setProducts(apiProducts.items);
console.log('Каталог из модели:', catalog.getProducts());
console.log('Товар по id:', catalog.getProduct(apiProducts.items[0].id));
console.log('Несуществующий id:', catalog.getProduct('fake-id'));

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
const api = new Api(import.meta.env.VITE_API_ORIGIN);
const communicationLayer = new CommunicationLayer(api);

communicationLayer.getProducts()
  .then((data) => {
    catalog.setProducts(data.items);
    console.log('Каталог, полученный с сервера:', catalog.getProducts());
  })
  .catch((err) => console.error('Ошибка загрузки каталога:', err));




// //CatalogModel
// console.log('Массив товаров из каталога:', apiProducts.items);

// catalog.setProducts(apiProducts.items);
// console.log('Товары, сохранённые в модели:', catalog.getProducts());

// const firstProduct = catalog.getProducts()[0];
// if (firstProduct) {
//   console.log('Поиск товара по id:', catalog.getProduct(firstProduct.id));
//   console.log('Поиск по несуществующему id (ожидаем undefined):', catalog.getProduct('fake-id'));
// }

// //CartModel
// cart.addProduct(firstProduct);
// console.log('Корзина после добавления товара:', cart.getProducts());
// console.log('Количество товаров в корзине:', cart.getCount());
// console.log('Сумма корзины:', cart.getTotal());
// console.log('Товар в корзине? (ожидаем true):', cart.hasProduct(firstProduct.id));

// cart.removeProduct(firstProduct.id);
// console.log('Корзина после удаления (ожидаем пустой массив):', cart.getProducts());
// console.log('Сумма пустой корзины (ожидаем 0):', cart.getTotal());

// cart.addProduct(firstProduct);
// cart.clear();
// console.log('Корзина после clear() (ожидаем пустой массив):', cart.getProducts());

// //BuyerModel
// buyer.setData({ payment: 'card' });
// buyer.setData({ email: 'test@example.ru' });
// console.log('Данные покупателя после двух setData (payment должен сохраниться):', buyer.getData());
// console.log('Ошибки валидации (ожидаем address и phone):', buyer.validate());

// buyer.setData({ address: 'СПб, Невский проспект, 1', phone: '+7 999 000-00-00' });
// console.log('Ошибки после дозаполнения (ожидаем пустой объект):', buyer.validate());

// buyer.clear();
// console.log('Данные покупателя после clear():', buyer.getData());