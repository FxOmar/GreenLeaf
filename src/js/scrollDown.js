export default document.querySelector('.arrow').addEventListener('click', () => {
	document.querySelector('.about-us').scrollIntoView({
		block: 'start',
		behavior: 'smooth'
	})
}, false)
