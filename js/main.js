window.addEventListener('load', loaderFade);
window.addEventListener('scroll', () => {
	btnAppear();
	logoDisappear();
});

console.log('Hello! Find out more about this site at: ');

function loaderFade() {
	setTimeout(() => {
		document.getElementById('gallery').style.animationDelay = '0s';
	}, 4000);

	setTimeout(() => {
		document.getElementById('wrapper').style.overflow = 'inherit';
		document.getElementById('contact').style.display = 'block';
		document.getElementById('logo').style.opacity = '1';
	}, 1680);

	setTimeout(() => {
		document.getElementById('loader').style.display = 'none';
		document.getElementById('container').style.opacity = '1';
	}, 2000);
}

function btnAppear() {
	if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		document.getElementById('up__btn').style.display = 'block';
	} else {
		document.getElementById('up__btn').style.display = 'none';
	}
}

function logoDisappear() {
	if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
		document.getElementById('logo').style.opacity = '0';
	} else {
		document.getElementById('logo').style.opacity = '1';
	}
}

document.getElementById('up__btn').addEventListener('click', () => {
	window.scrollTo(0, 0);
});
