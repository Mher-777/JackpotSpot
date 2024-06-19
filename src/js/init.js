import { defaults } from "./modules/defaults";
import { forms } from "./modules/forms";
import { button } from "./modules/button";
import { sliders } from "./modules/slider";
import { menu } from "./modules/menu";
import { modals } from "./modules/modals";
import { select } from "./modules/select";
import { rate } from "./modules/rateyo";
import { cookie } from "./modules/cookie";
import { config } from "./config";

var App = () => {

	defaults.init();
	forms.init();
	modals.init();
	select.init();
	rate.init();
	button.init();
	sliders.init();
	menu.init();
	cookie.init();

	config.log('app init')
	
};

export { App };