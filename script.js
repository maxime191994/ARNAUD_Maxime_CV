// Animation de la barre de navigation
const navbar=document.querySelector('.navbar');

window.addEventListener('scroll', ()=> {
		if (window.scrollY > 50) {
			navbar.classList.add('navbar-scrolled');
		}

		else {
			navbar.classList.remove('navbar-scrolled');
		}
	});

// Animation des titres de section
const sectionTitles=document.querySelectorAll('.section-title');

sectionTitles.forEach(title=> {
		anime({
			targets: title,
			translateY: [-50, 0],
			opacity: [0, 1],
			duration: 1500,
			easing: 'easeOutExpo',
			delay: anime.stagger(300)
		});
});

// Animation des cartes d'expérience
const experienceCards=document.querySelectorAll('.card');

experienceCards.forEach(card=> {
		anime({
			targets: card,
			translateY: [50, 0],
			opacity: [0, 1],
			duration: 1000,
			easing: 'easeOutExpo',
			delay: anime.stagger(300)
		});
});

// Animation du texte de motivation
const motivationText=document.querySelector('.motivation-text');

anime({
	targets: motivationText,
	translateY: [50, 0],
	opacity: [0, 1],
	duration: 1500,
	easing: 'easeOutExpo',
	delay: 1000
});