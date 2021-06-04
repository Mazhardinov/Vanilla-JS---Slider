// Variables
const slider = document.querySelector('.slider');
const active = document.querySelector('#active');
const line1 = document.querySelector('#line-1');
const line2 = document.querySelector('#line-2');
const line3 = document.querySelector('#line-3');
const line4 = document.querySelector('#line-4');
const container = document.querySelector('.container')

line1.addEventListener('click', () => {
    slider.style.transform = 'translateX(0)';
    active.style.top = '0';
    container.style.background = '#c4d719';
})

line2.addEventListener('click', () => {
    slider.style.transform = 'translateX(-25%)';
    active.style.top = '80px';
    container.style.background = '#0b23fc';
})

line3.addEventListener('click', () => {
    slider.style.transform = 'translateX(-50%)';
    active.style.top = '160px';
    container.style.background = '#0bfc5b';
})

line4.addEventListener('click', () => {
    slider.style.transform = 'translateX(-75%)';
    active.style.top = '240px';
    container.style.background = '#fc0b33';
})