import { IBuyer, IFormErrors } from '../../types/index';

export class BuyerModel {
  _payment: 'card' | 'cash' | '';
  _address: string;
  _email: string;
  _phone: string;

  constructor () {
    this._payment = '';
    this._address = '';
    this._email = '';
    this._phone = '';
  }

  // сохраняет переданные данные
  setData(data: Partial<IBuyer>): void {
    if (data.payment !== undefined) {
      this._payment = data.payment;
    }

    if (data.address !== undefined) {
      this._address = data.address;
    }

    if (data.email !== undefined) {
      this._email = data.email;
    }

    if (data.phone !== undefined) {
      this._phone = data.phone;
    }
  }

  // возвращает данные покупателя
  getData(): IBuyer {
    return {
      payment: this._payment,
      address: this._address,
      email: this._email,
      phone: this._phone
    }
  }

  // сбрасывает данные (используется после успешного заказа)
  clear(): void {
    this._payment = '';
    this._address = '';
    this._email = '';
    this._phone = '';
  }

  // проверяет корректность данных и возвращает объект с ошибками;
  // пустой объект означает, что данные валидны
  validate(): IFormErrors {    
    const errors: IFormErrors = {};

    if (!this._payment) {
      errors.payment = 'Не выбран вид оплаты';
    }

    if (!this._address) {
      errors.address = 'Укажите адрес доставки';
    }

    if (!this._email) {
      errors.email = 'Укажите емэйл';
    }

    if (!this._phone) {
      errors.phone = 'Укажите телефон';
    }

    return errors;
  }

}