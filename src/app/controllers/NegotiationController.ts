import { Negotiations } from './../domain/negotiation/Negotiations';
import { NegotiationsView } from '../ui/views/NegotiationsView';
import { Negotiation } from './../domain/negotiation/Negotiation';
import { DateConverter } from './../ui/converters/DateConverter';
import { Message } from './../ui/models/Message';
import { MessageView } from '../ui/views/MessageView';

export class NegotiationController {
  private _inputDate: any;
  private _inputQuantity: any;
  private _inputValue: any;
  private _negotiations: any;
  private _negotiationsView: any;
  private _message: any;
  private _messageView: any;

  constructor() {
    const $ = document.querySelector.bind(document);
    this._inputDate = $('#date');
    this._inputQuantity = $('#quantity');
    this._inputValue = $('#value');

    this._negotiations = new Negotiations();
    this._negotiationsView = new NegotiationsView('#negotiations');

    this._message = new Message();
    this._messageView = new MessageView('#messageView');
    this._messageView.update(this._message);
  }

  public add(event: any): void {
    event.preventDefault();
    this._negotiations.add(this._createNegotiation());
    this._message.text = 'Successfully created negotiation'
    this._negotiationsView.update(this._negotiations);
    this._clearForm();
    this._messageView.update(this._message);
  }

  private _clearForm(): void {
    this._inputDate.value = '';
    this._inputQuantity.value = '';
    this._inputValue.value = '';
    this._inputDate.focus();
  }

  private _createNegotiation() {
    return new Negotiation(
      DateConverter.toDate(this._inputDate.value),
      parseInt(this._inputQuantity.value),
      parseFloat(this._inputValue.value)
    );
  }
}