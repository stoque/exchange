export class Negotiations {
  private _negotiations: any;

  constructor() {
    this._negotiations = [];
  }

  public add(negotiation: any) {
    this._negotiations.push(negotiation);
  }

  public toArray() {
    return [].concat(this._negotiations);
  }

  get totalVolume() {
    return this._negotiations.reduce((total: any, negotiation: any) => total + negotiation.volume, 0);
  }
}
