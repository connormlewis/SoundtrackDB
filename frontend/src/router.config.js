import {UIRouterReact, servicesPlugin, pushStateLocationPlugin} from 'ui-router-react'; 
import states from './states';

export const router = new UIRouterReact(); 
router.plugin(servicesPlugin);
router.plugin(pushStateLocationPlugin);

states.forEach(state => router.stateRegistry.register(state));

router.urlService.rules.initial({state: 'home'}); 

router.start(); 