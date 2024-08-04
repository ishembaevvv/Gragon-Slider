const body = document.body;
const listInfo = document.querySelector('.list-info');
const listImg = document.querySelector('.list-img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let index = 0;

nextBtn.addEventListener('click', () => {
	index = index < 3 ? index + 1 : 3;

	listInfo.style.transform = `translateY(${index * -25}%)`;
	listImg.style.transform = `translateY(${index * -100}%)`;
});

prevBtn.addEventListener('click', () => {
	index = index > 0 ? index - 1 : 0;

	listInfo.style.transform = `translateY(${index * -25}%)`;
	listImg.style.transform = `translateY(${index * -100}%)`;
});
