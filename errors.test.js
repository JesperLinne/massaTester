const functions = require("./errors");

test("Adds 2 + 2 to equal 4", () => {
    expect(2 + 2).toBe(4);
});

/*
test("Adds 2 + 2 to not equal 5", () => {
    expect(2 + 2).not.toBe(5);
});

test("Adds 0.1 + 0.2 to equal 0.3", () => {
    expect(0.1 + 0.2).toBeCloseTo(0.3);
});

const obj1 = {name:"test", data:[1,2,3]
};
const obj2 = {name:"test", data:[1,2,3]
};

test("checks if obj1 to be like obj2", () => {
    expect(obj1).toEqual(obj2);
});



describe('functions', () => {

    test("check empty list", ()=> {
        expect(functions.emptyList()).toEqual([]);

    });
    test("check empty list", ()=> {
        expect(functions.emptyList()).toEqual(0);

    });
  });
       */