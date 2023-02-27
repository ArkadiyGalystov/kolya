window.addEventListener('click', function (event) {
	const aboutForm = document.querySelector('.about');
	if (event.target.hasAttribute('cardbutton')) {
    aboutForm.classList.add('popup');
}
});

window.addEventListener('click', function (event) {
	const aboutForm = document.querySelector('.about');
	if (event.target.hasAttribute('close')) {
    aboutForm.classList.remove('popup');
}
});