AOS.init();

//Ajoute une classe au header pour le differencer lors du scroll

const scrollHeader = () => {
  const header = document.getElementById('header');
  this.scrollY >= 50
    ? header.classList.add('scroll-header')
    : header.classList.remove('scroll-header');
};
window.addEventListener('scroll', scrollHeader);

//fin

//Modal cv formation

const modalViews = document.querySelectorAll('.services__modal'),
  modalBtns = document.querySelectorAll('.services__button'),
  modalClose = document.querySelectorAll('.services__modal-close');

let modal = function (modalClick) {
  modalViews[modalClick].classList.add('active-modal');
};

modalBtns.forEach((mb, i) => {
  mb.addEventListener('click', () => {
    modal(i);
  });
});

modalClose.forEach((mc) => {
  mc.addEventListener('click', () => {
    modalViews.forEach((mv) => {
      mv.classList.remove('active-modal');
    });
  });
});

//fin

//Modal CV pro

const modalViews2 = document.querySelectorAll('.work__modal'),
  modalBtns2 = document.querySelectorAll('.work__button-modal'),
  modalClose2 = document.querySelectorAll('.work__modal-close');

const modal2 = function (modalClick) {
  modalViews2[modalClick].classList.add('work__active-modal');
};

modalBtns2.forEach((mb, i) => {
  mb.addEventListener('click', () => {
    modal2(i);
  });
});

modalClose2.forEach((mc) => {
  mc.addEventListener('click', () => {
    modalViews2.forEach((mv) => {
      mv.classList.remove('work__active-modal');
    });
  });
});

//fin

//Animation menu

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector(
        '.nav__menu a[href*=' + sectionId + ']'
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  });
};
window.addEventListener('scroll', scrollActive);

//fin

//Filtre Project

const mixerPortfolio = mixitup('.work__container', {
  selectors: {
    target: '.work__card',
  },
  animation: {
    duration: 300,
  },
});

const linkWork = document.querySelectorAll('.work__item');

function activeWork() {
  linkWork.forEach((l) => l.classList.remove('active-work'));
  this.classList.add('active-work');
}

linkWork.forEach((l) => l.addEventListener('click', activeWork));

//fin

//gestion du formulaire avec emailjs
document.getElementById('form2').addEventListener('submit', function (event) {
  event.preventDefault();

  emailjs.sendForm('service_z6my1jq', 'template_53i5ju4', this).then(
    function () {
      console.log('SUCCESS!');
      alert('Votre message a bien été envoyé ! Merci !');
      event.target.reset();
    },
    function (error) {
      console.log('FAILED...', error);
      alert("Quelque chose s'est mal passé on dirait, reessayez plus tard !");
    }
  );
});
