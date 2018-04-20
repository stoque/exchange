export class View {
  private _element: any;

  constructor(selector: string) {
    this._element = document.querySelector(selector);
  }

  public update(model: any) {
    this._element.innerHTML = this.render(model);
  }

  public render(model: any) {
    throw new Error('You need to implement the render method!');
  }
}
