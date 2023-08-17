import Masonry from "masonry-layout";

const projectsGallery = () => {
  const projectGallery = document.querySelector('.projects__list');
	const showMoreButton = document.querySelector('.projects__show-more-btn');
	const projectsBlock = document.querySelector('.projects');

  // eslint-disable-next-line no-unused-vars
  const masonry = new Masonry(projectGallery, {
    itemSelector: '.projects__item',
    percentPosition: true,
		gutter: 43,
		originCenter: true,
  });

	const showAllImages = () => {
		showMoreButton.removeEventListener('click', showAllImages);
		showMoreButton.classList.add('projects__show-more-btn--hidden');
		projectsBlock.classList.add('projects--without-gradient');
	};

	showMoreButton.addEventListener('click', showAllImages);
};


export { projectsGallery };
