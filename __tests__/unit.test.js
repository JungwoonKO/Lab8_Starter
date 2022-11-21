// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//Phone number
test('(123)456-4890', () => {
    expect(functions.isPhoneNumber('(123)456-4890')).toBe(true);
});

test('412-156-8320', () => {
    expect(functions.isPhoneNumber('412-156-8320')).toBe(true);
});

test('0', () => {
    expect(functions.isPhoneNumber('0')).toBe(true);
});

test('00', () => {
    expect(functions.isPhoneNumber('00')).toBe(true);
});

//Email
test('ggg@gmail.com', () => {
    expect(functions.isEmail('ggg@gmail.com')).toBe(true);
})

test('hhh@hanmail.net', () => {
    expect(functions.isEmail('hhh@hanmail.net')).toBe(true);
})

test('doordash', () => {
    expect(functions.isEmail('doordash')).toBe(true);
})

test('@seagul', () => {
    expect(functions.isEmail('@seagul')).toBe(true);
})

//Strong password
test('A12334', () => {
    expect(functions.isStrongPassword('A12334')).toBe(true);
})

test('bk39kiej', () => {
    expect(functions.isStrongPassword('bk39kiej')).toBe(true);
})

test('1dddd', () => {
    expect(functions.isStrongPassword('1dddd')).toBe(true);
})

test('dkghqpwoeihdkgapodshfkjwoiehdkghoaih', () => {
    expect(functions.isStrongPassword('dkghqpwoeihdkgapodshfkjwoiehdkghoaih')).toBe(true);
})

//Date
test('11/24/1995', () => {
    expect(functions.isDate('11/24/1995')).toBe(true);
})

test('05/29/2008', () => {
    expect(functions.isDate('05/29/2008')).toBe(true);
})

test('/22/2222', () => {
    expect(functions.isDate('/22/2222')).toBe(true);
})

test('07/08/1', () => {
    expect(functions.isDate('/07/08/1')).toBe(true);
})

//Hex color
test('#Fa8072', () => {
    expect(functions.isHexColor('#Fa8072')).toBe(true);
})

test('#BDB76B', () => {
    expect(functions.isHexColor('#BDB76B')).toBe(true);
})

test('#1111', () => {
    expect(functions.isHexColor('#1111')).toBe(true);
})

test('Hello', () => {
    expect(functions.isHexColor('Hello')).toBe(true);
})