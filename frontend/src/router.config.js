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
        if (!transition.ignored() && error.type !== 2) {
            console.error(error);
            return transition.router.stateService.go('error', { code: error.detail ? error.detail.status : null })
        }
    }
})

router.transitionService.onEnter({}, (transition) => {
    window.scrollTo(0,0);
})

router.transitionService.onBefore({}, (transition) => {
    console.debug(`Transitioning from ${transition.from().name} to ${transition.to().name}}`, transition.params());
})

router.urlService.rules.initial({state: 'home'});