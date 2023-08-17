import { mobileMenu } from "./components/mobile-menu.js";
import { projectsGallery } from "./components/projects-gallery.js";
import { fullscreenImage } from "./components/fullscreen-image.js";

window.addEventListener('DOMContentLoaded', () => {
	mobileMenu();
	projectsGallery();
	fullscreenImage();
});
