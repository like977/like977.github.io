"use strict";function asyncGeneratorStep(e,n,r,t,o,a,s){try{var u=e[a](s),i=u.value}catch(e){return void r(e)}u.done?n(i):Promise.resolve(i).then(t,o)}function _asyncToGenerator(u){return function(){var e=this,s=arguments;return new Promise(function(n,r){var t=u.apply(e,s);function o(e){asyncGeneratorStep(t,n,r,o,a,"next",e)}function a(e){asyncGeneratorStep(t,n,r,o,a,"throw",e)}o(void 0)})}}function removeIndex(e){return _removeIndex.apply(this,arguments)}function _removeIndex(){return(_removeIndex=_asyncToGenerator(regeneratorRuntime.mark(function e(n){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.map(function(e){return e.url=e.url.replace(/(^|\/)index\.html$/,"/"),e}),e.abrupt("return",{manifest:r});case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}pjax.site_handleResponse=pjax.handleResponse,pjax.handleResponse=function(e,n,r,t){Object.defineProperty(n,"responseURL",{value:r}),pjax.site_handleResponse(e,n,r,t)},module.exports={manifestTransforms:[removeIndex]};