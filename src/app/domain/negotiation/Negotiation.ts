export class Negotiation {
  private _date: any;
  private _quantity: any;
  private _value: any;

  constructor(_date: any, _quantity: any, _value: any) {
    Object.assign(this, {_quantity, _value});
    this._date = new Date(_date.getTime());
    Object.freeze(this);
  }

  get volume() {
    return this._quantity * this._value;
  }

  get date() {
    return new Date(this._date.getTime());
  }

  get quantity() {
    return this._quantity;
  }

  get value() {
    return this._value;
  }
}