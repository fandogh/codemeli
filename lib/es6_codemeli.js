/**
 * @typedef {Object} CodeMeli
 * @property code
 * @property parity
 * @property city_code
 * @property uid
 */

/**
 *
 * @param {String|Number} code - Input national number value. it can be string or number
 * @param {Boolean} [returnObj] - If returnObj is true (defaults to `false`) function will return an object.
 * @returns {CodeMeli|Object}
 */
function codemeli(code, returnObj) {
    if (!code || code === '') return null;
    code = String(code);
    // Try to parse it as a number
    let num = parseInt(code.trim());
    if (!num) return null;
    // Convert back to string
    let _code = String(num);
    if (_code.length < 8) {
        return null;
    }
    while (_code.length < 10)
        _code = '0' + _code;
    // xxxxxxxxxx is invalid pattern!
    let same = true;
    for (let i = 0; i < 10; i++)
        if (_code[i] !== _code[0]) {
            same = false;
            break;
        }
    if (same) {
        return null;
    }
    // Validate
    let sum = 0;
    for (let i = 10; i > 0; i--)
        sum += parseInt(_code[10-i])*i;
    if ((sum = sum % 11)>= 2) {sum = 11 - sum};

    if (_code.substr(9, 1) !== sum + '') {
        return null;
    }
    if (returnObj) {
        return {
            code: _code,
            parity: _code[9],
            city_code: _code.substr(0, 2),
            uid: _code.substr(2, 7)
        }
    }

    return _code;
}
if (typeof module !== 'undefined') {
    module.exports = codemeli;
} else if (typeof window !== 'undefined') {
    window.codemeli = codemeli;
}
