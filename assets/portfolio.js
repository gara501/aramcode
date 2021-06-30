const hero_eyebrow = document.querySelector('.intro h4');
const hero_title = document.querySelector('.intro h1');
const hero_subtitle = document.querySelector('.intro h2');
const hero_paragraph = document.querySelector('.intro p');
const menu = document.querySelector('nav');
const btn = document.querySelector('.intro .btn-link');
const social = document.querySelector('.networks');
const menuMobileButton = document.querySelector('.menu-mobile-action');
const menuMobile = document.querySelector('.menu-mobile');
const menuMobileItems = document.querySelectorAll('.menu-mobile a');
const close = document.querySelector('.close');

menuMobileButton.addEventListener('click', (e)=> {
	menuMobile.classList.add('show');
})

close.addEventListener('click', (e) => {
	menuMobile.classList.remove('show');
})

menuMobileItems.forEach(item => {
	item.addEventListener('click', (e) => {
		menuMobile.classList.remove('show');
	})
})

gsap.registerPlugin(ScrollTrigger);

gsap.timeline()
.fromTo(
	menu,
	1.5, 
	{y: '-100%'}, 
	{y: '0%'}, '+=.5')
.fromTo(
	hero_eyebrow,
	1, 
	{x: -500}, 
	{x: 0, ease: Power2.easeInOut})
.fromTo(
	social,
	1.5, 
	{y: '100%'}, 
	{y: '0%'}, '+=.5')
.fromTo(
	hero_title,
	1, 
	{opacity: 0, x: 30}, 
	{opacity: 1, x: 0}, '-=2')
.fromTo(
	hero_subtitle,
	2, 
	{opacity: 0, x: 30}, 
	{opacity: 1, x: 0}, '-=1')
.fromTo(
	hero_paragraph,
	.5, 
	{opacity: 0, y: '-100%'}, 
	{opacity: 1, y: '0%'}, '-=.5')
.fromTo(
	btn,
	.5, 
	{opacity: 0, y: '-100%'}, 
	{opacity: 1, y: '0%'}, '-=.5')

