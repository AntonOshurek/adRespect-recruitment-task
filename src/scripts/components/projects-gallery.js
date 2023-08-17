import Masonry from "masonry-layout";

const projectsGallery = () => {
  const grid = document.querySelector('.grid');
  // eslint-disable-next-line no-unused-vars
  const masonry = new Masonry(grid, {
    itemSelector: '.grid-item',
    percentPosition: true,
		gutter: 43,
		originCenter: true,
  });
};


export { projectsGallery };
