// JS scripts placed here
const hrt = document.querySelector('.heart-Circle');

const toggle = function () {
	if ( hrt.getAttribute('aria-checked') === 'true' ) {
		hrt.setAttribute('aria-checked', 'false');
	}
	else {
		hrt.setAttribute('aria-checked', 'true');
	}
}

hrt.addEventListener('click', toggle, false);
hrt.addEventListener('keypress', function ( e ) {
	const keyCode = e.keyCode || e.which;
	switch ( keyCode ) {
		case 32:
			e.preventDefault();
			toggle();
			break;
		default:
			break;
	}
	
})