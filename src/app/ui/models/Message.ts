export class Message {
  private _text: string;

  constructor(text = '') {
    this._text = text;
  }

  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
  }
}
