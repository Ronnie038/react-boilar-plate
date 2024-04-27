export const imagePaths = [];
Object.values(import.meta.glob('./elonMuseum_fxB/*', { eager: true })).forEach(
	({ default: path }) => {
		const url = new URL(path, import.meta.url);
		imagePaths.push(url.pathname);
	}
);

import logo from './images/Logo/Vector.png';
import xIcon from './images/Icons/X_icon.png';
import cmcIcon from './images/Icons/cmc.png';
import dexIcon from './images/Icons/dext-large.png';
import icon from './images/Icons/icon.png';

export { logo, xIcon, cmcIcon, dexIcon, icon };
