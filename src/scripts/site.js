import { Layout } from './Layout';
import { ClickHandler } from './utils';
const main = document.querySelector('main');
main.innerHTML = Layout();

const button = document.querySelector('button');
button.addEventListener('click', ClickHandler)