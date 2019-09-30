import word from './hello'
import './css/style.scss'

const sayHi = (word: string) => {
  console.log(word);
}

sayHi(word);

console.log([1, 3, 5].reduce((acc, val) => acc > val ? acc : val));

document.write(`<h1>h3llo</h1>`)


