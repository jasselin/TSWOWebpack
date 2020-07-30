(function () {
    if (typeof Promise === 'undefined')
        document.write('<script src="node_modules/bluebird/js/browser/bluebird.core.js"><\/script>');

    if (typeof fetch === 'undefined')
        document.write('<script src="node_modules/whatwg-fetch/dist/fetch.umd.js"><\/script>');
    
    (function () {
        // Source: https://github.com/systemjs/systemjs-examples/blob/master/loading-code/typescript-default-extension/dist/systemjs-hooks/resolve.js
        const endsWithFileExtension = /\/?\.[a-zA-Z]{2,}$/;
        const originalResolve = System.constructor.prototype.resolve;
        System.constructor.prototype.resolve = function () {
            // apply original resolve to make sure importmaps are resolved first
            const url = originalResolve.apply(this, arguments);
            // append .js file extension if url is missing a file extension
            return endsWithFileExtension.test(url) ? url : url + '.js';
        };

        const originalCreateScript = System.constructor.prototype.createScript;
        System.constructor.prototype.createScript = function () {
            // force cache update
            arguments[0] = arguments[0] + (arguments[0].indexOf('?') < 0 ? '?' : '&') + 'v=' + (new Date()).getTime();
            return originalCreateScript.apply(this, arguments);
        }
    })();

    System.import('./dist/app')
        .catch(console.error.bind(console));
})();