import Masonry from "masonry-layout";

const projectsGallery = () => {
  const grid = document.querySelector('.projects__list');
  // eslint-disable-next-line no-unused-vars
  const masonry = new Masonry(grid, {
    itemSelector: '.projects__item',
    percentPosition: true,
		gutter: 43,
		originCenter: true,
  });
};


export { projectsGallery };
