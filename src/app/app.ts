import { NegotiationController } from './controllers/NegotiationController';

const controller = new NegotiationController;
const $form = document.querySelector('[data-js="form"]')

if ($form) {
  $form.addEventListener('submit', controller.add.bind(controller))
}