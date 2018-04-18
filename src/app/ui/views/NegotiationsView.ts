import { View } from './View';
import { DateConverter } from '../converters/DateConverter';

export class NegotiationsView extends View {
  render(model: any): string {
    return `
      <table class="table">
          <thead>
              <tr>
                  <th>Date</th>
                  <th>Quantity</th>
                  <th>Value</th>
                  <th>Volume</th>
              </tr>
          </thead>

          <tbody>
              ${model.toArray().map((negotiation: any) =>
                `
                  <tr>
                      <td>${DateConverter.toText(negotiation.date)}</td>
                      <td>${negotiation.quantity}</td>
                      <td>${negotiation.value}</td>
                      <td>${negotiation.volume}</td>
                  </tr>                        
              `).join('')}
          </tbody>
          
          <tfoot>
              <tr>
                  <td colspan="3"></td>
                  <td>${model.totalVolume}</td>            
              </tr>
          </tfoot>
          
      </table>      
    `
  }
}
