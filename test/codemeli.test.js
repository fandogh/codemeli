const codemeli = require('../lib/codemeli');
const {valid_codes, invalid_codes} = require('./codes');

test('valid codes have proper length', () => {
    valid_codes.forEach(code => {
        expect(codemeli(code)).toHaveLength(10)
    });
});

test('valid codes have proper parity', () => {
    valid_codes.forEach(code => {
        let _code = codemeli(code, true);
        expect(_code.parity).toBe(_code.code[_code.code.length - 1]);
    });
});

test('invalid codes be null', () => {
    invalid_codes.forEach(code => {
        expect(codemeli(code)).toBeNull();
    });
});