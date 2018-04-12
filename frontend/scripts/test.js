'use strict';

import { JSDOM } from 'jsdom';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const dom = new JSDOM('<html><body></body></html>');

global.document = dom.window.document; 
global.window = document.defaultView;
global.navigator = {userAgent: 'node.js'};

global.window.matchMedia = window.matchMedia || function() {
    return {
        matches : false,
        addListener : function() {},
        removeListener: function() {}
    };
};

function noop() {
	return {}; 
}

// prevent mocha tests from breaking when trying to require a css file
require.extensions['.css'] = noop;
require.extensions['.svg'] = noop; 
require.extensions['.png'] = noop;
require.extensions['.jpg'] = noop;
