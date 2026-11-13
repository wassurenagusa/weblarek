import { IBuyer, FormErrors } from '../../types/index';

type TPayment = 'card' | 'cash' | '';

export class BuyerModel {
  private payment: TPayment;
  private address: string;
  private email: string;
  private phone: string;

  constructor () {
    this.payment = '';
    this.address = '';
    this.email = '';
    this.phone = '';
  }

  // сохраняет переданные данные
  setData(data: Partial<IBuyer>): void {
    if (data.payment !== undefined) {
      this.payment = data.payment;
    }

    if (data.address !== undefined) {
      this.address = data.address;
    }

    if (data.email !== undefined) {
      this.email = data.email;
    }

    if (data.phone !== undefined) {
      this.phone = data.phone;
    }
  }

  // возвращает данные покупателя
  getData(): IBuyer {
    return {
      payment: this.payment,
      address: this.address,
      email: this.email,
      phone: this.phone
    }
  }

  // сбрасывает данные (используется после успешного заказа)
  clear(): void {
    this.payment = '';
    this.address = '';
    this.email = '';
    this.phone = '';
  }

  // проверяет корректность данных и возвращает объект с ошибками;
  // пустой объект означает, что данные валидны
  validate(): FormErrors {    
    const errors: FormErrors = {};

    if (!this.payment) {
      errors.payment = 'Не выбран вид оплаты';
    }

    if (!this.address) {
      errors.address = 'Укажите адрес доставки';
    }

    if (!this.email) {
      errors.email = 'Укажите емэйл';
    }

    if (!this.phone) {
      errors.phone = 'Укажите телефон';
    }

    return errors;
  }

}