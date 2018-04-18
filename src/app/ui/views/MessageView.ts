import { View } from './View';

export class MessageView extends View {
  render(model: any): string {
    return model.text ? `<p>${model.text}</p>` : '';
  }
}