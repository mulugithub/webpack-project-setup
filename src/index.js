import component from './helloWebpack.js';
import './css/style.css';
import logoImage from './asset/my Logo.gif';

const myLogo = document.getElementById('myLogo');
myLogo.classList.add('logo');
myLogo.src = logoImage;
document.body.appendChild(component());