/*const form = document.getElementById('form'); 
const progress = document.querySelector('.step')
const prevBtn = document.querySelectorAll('.prev');
const nextBtn = document.querySelectorAll('.next');
const pages = document.querySelectorAll('.page');
let currentPage = 1;

// Bouton Suivant
nextBtn.forEach(button => {
	button.addEventListener('click', () => {
		currentPage++;
		if (currentPage > pages.length) {
			currentPage = pages.length;
		}
		updateProgress();
	});
});

// Bouton Précédent
prevBtn.forEach(button => {
	button.addEventListener('click', () => {
		currentPage--;
		if (currentPage < 1) {
			currentPage = 1;
		}
		updateProgress();
	});
});

// Mise à jour de la barre de progression
function updateProgress() {
	progress.style.width = `${(currentPage - 1) / (pages.length - 1) * 100}%`;
	pages.forEach((page, idx) => {
		if (idx === currentPage - 1) {
			page.classList.add('active');
		} else {
			page.classList.remove('active');
		}
	});
}

//Soumission du formulaire
form.addEventListener('submit', (e) => {
	e.preventDefault();
	const formData = new FormData(form);
	const data = {};
	for (let [name, value] of formData) {
		data[name] = value;
	}
	console.log(data);
}); */