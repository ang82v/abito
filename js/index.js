console.log('hello');
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-box input');
const cardWrapper = document.querySelector('.content-main__list');
const cardArray = [
  {
    id: 0,
    title: 'Первый',
    price: '170Р',
    address: 'Казань, р-н Вахитовский',
    date: '10 июля 11:39',
    img: './img/item.png',
  },
  {
    id: 1,
    title: 'Второй',
    price: '876Р',
    address: 'Казань, р-н Вахитовский',
    date: '10 июля 11:39',
    img: './img/item.png',
  },
  {
    id: 2,
    title: 'Пвх материал 2й сорт',
    price: '234Р',
    address: 'Казань, р-н Вахитовский',
    date: '10 июля 11:39',
    img: './img/item.png',
  },
  {
    id: 3,
    title: 'Пвх материал 1й сорт',
    price: '4550Р',
    address: 'Казань, р-н Вахитовский',
    date: '10 июля 11:39',
    img: './img/item.png',
  },
  {
    id: 4,
    title: 'Пвх материал 2й сорт',
    price: '1450Р',
    address: 'Казань, р-н Вахитовский',
    date: '10 июля 11:39',
    img: './img/item.png',
  },
];

const render = (cardList) => {
  cardWrapper.innerHTML = '';
  cardList.forEach((item, idx) => {
    console.log('пошли');
    cardWrapper.insertAdjacentHTML(
      `beforeend`,
      `<a href="product.html" class="content-main__list-item">
        <div class="content-main__list-item--img">
            <img src="${item.img}" alt="item">
        </div>
        <div class="content-main__list-item--title">
            ${item.title}
        </div>
        <strong class="content-main__list-item--price">
            ${item.price}
        </strong>
        <div class="content-main__list-item--desc-box">
            <span class="content-main__list-item--desc">${item.address}</span>
            <span class="content-main__list-item--desc">${item.date}</span>
        </div>
    </a>`
    );
  });
};

const fiteredArray = (array, value) => {
  //console.log(array);
  console.log(value);

  return array.filter((item) => {
    return item.title.includes(value);
  });
};

render(cardArray);

searchBtn.addEventListener('click', () => {
  render(fiteredArray(cardArray, searchInput.value));
});
