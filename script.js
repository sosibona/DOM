let data = {  "Рыбы": {    "форель": {},    "лосось": {}  },  "Деревья": {    "Огромные": {      "секвойя": {},      "дуб": {}    },    "Цветковые": {      "яблоня": {},      "магнолия": {}    }  }};let container = document.querySelector('.tree');const list = document.createElement('div');list.className = 'dom-tree';container.append(list);container = document.querySelector('.dom-tree');function createTree(container, data) {  const ul = document.createElement('ul');  container.append(ul);  for (let key in data) {    const li = document.createElement('li');    li.textContent = key;    ul.append(li);    if (typeof data[key] === 'object') {      createTree(li, data[key]);    }  }}createTree(container, data);