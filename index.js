(function() {
    var MODULE = 'perezify';

    function perezify(string) {
        return string.toUpperCase();
    };

    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = perezify;
    } else {
        if (typeof define === 'function' && define.amd) {
            define([], function() {
                return perezify;
            });
        } else {
            window[MODULE] = perezify;
        }
    }
})();