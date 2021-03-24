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
})