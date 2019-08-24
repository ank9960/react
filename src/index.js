var _ = require('lodash');
//named inport의 규칙은 반드시 {}에 동일한 이름을 사용
import {area, circumference} from './circle';
//default import 규칙 : {} 없이 이름을 바꿀 수 있다.
import aaa from './cube';

import './style.css';
import './hello.scss';

function component() {
	let element = document.createElement('div');

	// Lodash, currently included via a script, is required for this line to work
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	return element;
}

console.log('webpack test');
console.log(area(5));
console.log(aaa(5));
document.body.appendChild(component());