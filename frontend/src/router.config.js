import {UIRouterReact, servicesPlugin, pushStateLocationPlugin} from '@uirouter/react';
import states from './states';

export const router = new UIRouterReact(); 
router.plugin(servicesPlugin);
router.plugin(pushStateLocationPlugin);

states.forEach(state => router.stateRegistry.register(state));

router.urlRouter.otherwise({ state: 'error', params: {code: 404} })

router.transitionService.onError({}, (transition) => {
    if (transition.success === false) {
        let error = transition.error()
        return transition.router.stateService.go('error', { code: error.detail.status })
    }
})

router.urlService.rules.initial({state: 'home'});