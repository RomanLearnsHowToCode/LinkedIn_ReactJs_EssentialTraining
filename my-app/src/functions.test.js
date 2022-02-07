import {timesTwo} from "./functions";

//writing test function
// !!!test-driven development is to write test fist, watch it fail and build the JavaScript files around it to work!!!

// this is JEST testing ,which is a part of REACT APP.. 
// first parameter in expect is the name of the test, second argument is what should be tested
test("Multiplies by two", () => {
    expect(timesTwo(4)).toBe(8);
});

//second way to do testing is in package.jason, where is testing library