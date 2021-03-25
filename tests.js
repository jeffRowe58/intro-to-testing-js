// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('sayHello(Jane) should return "Hello, Jane!"', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('sayHello("Alex") should return "Hello, Alex!", or "Hello, Jane!" if anything other.', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    })
    it('sayHello("Pat") should return "Hello, Pat!"', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    })
    it('sayHello() should return "Hello, World!"', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('sayHello(true) should return "Hello, World!"', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('sayHello(false) should return "Hello World!"', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

describe('isFive',function(){
    it('should be a defined function', function (){
        expect(typeof isFive).toBe("function");
    });
    it('should return a boolean value', function () {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return true when 5 is passed through', function () {
        expect(isFive(5)).toBe(true)
    });
    it('should return false if a string is passed through', function () {
        expect(isFive("")).toBe(false);
    });
    it('should return false if 7 is passed through',function () {
        expect(isFive(7)).toBe(false);
    });
})

describe('isEven', function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe("function");
    });
    it('should return a boolean value', function () {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return true when 2 is passed', function (){
        expect(isEven(2)).toBe(true);
    });
    it('should return true when -4 is passed', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when 3 is passed', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when banana is passed', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when "8" is passed', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return false if Infinity is passed', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false if boolean value is passed', function () {
        expect(isEven(true)).toBe(false);
        expect(isEven(false)).toBe(false);
    });
    it('should return false if no arguement is passed', function () {
        expect(isEven()).toBe(false);
    });
});
describe('isVowel', function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe("function");
    });
    it('should always return a boolean', function () {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return true for "a"', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true for "A"', function () {
        expect(isVowel('A')).toBe(true);
    });
    it('should return false for "y"', function () {
        expect(isVowel('y')).toBe(false);
    });
    it('should return false for 4', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false if a boolean is passed', function (){
        expect(isVowel(true)).toBe(false);
        expect(isVowel(false)).toBe(false);
    });
    it('should return false if banana is passed', function (){
        expect(isVowel('banana')).toBe(false);
    });
    it('should return false if no arg is passed', function (){
        expect(isVowel()).toBe(false);
    });
});
describe('add', function () {
    it('should be a defined function', function (){
        expect(typeof add).toBe("function");
    });
    it('should be typeof number', function (){
        expect(typeof add()).toBe("number");
    });
    it('should return 5 when 2 & 3 are passed', function (){
        expect(add(2,3)).toBe(5);
    });
    it('should return -12 when -3 & -9 are passed', function (){
        expect(add(-3,-9)).toBe(-12);
    });
    it('should return 11 when "5" & 6 are passed', function (){
        expect(add("5",6)).toBe(11);
    });
    it('should return 6 when "-4" & "10" are passed', function (){
        expect(add("-4","10")).toBe(6);
    });
    it('should return NaN when "banana" & "split" are passed', function () {
        expect(isNaN(add("banana","split"))).toBe(true);
    });
    it('should return NaN when 2 & "apples" are passed', function () {
        expect(isNaN(add(2,"apples"))).toBe(true);
    });
    it('should return NaN when no parameters are passed', function (){
        expect(isNaN(add())).toBe(true);
    });
});