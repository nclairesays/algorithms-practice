// Add, edit, or remove tests in this file.
// Treat it as your playground!

const program = require("./program");
const chai = require("chai");

it('Test Case #1', function() {
  chai.expect(program.getNthFib(1)).to.deep.equal(0);
});

it('Test Case #2', function() {
  chai.expect(program.getNthFib(2)).to.deep.equal(1);
});

it('Test Case #3', function() {
  chai.expect(program.getNthFib(3)).to.deep.equal(1);
});

it('Test Case #4', function() {
  chai.expect(program.getNthFib(4)).to.deep.equal(2);
});

it('Test Case #5', function() {
  chai.expect(program.getNthFib(5)).to.deep.equal(3);
});

it('Test Case #6', function() {
  chai.expect(program.getNthFib(6)).to.deep.equal(5);
});

it('Test Case #7', function() {
  chai.expect(program.getNthFib(7)).to.deep.equal(8);
});

it('Test Case #8', function() {
  chai.expect(program.getNthFib(8)).to.deep.equal(13);
});

it('Test Case #9', function() {
  chai.expect(program.getNthFib(9)).to.deep.equal(21);
});

it('Test Case #10', function() {
  chai.expect(program.getNthFib(10)).to.deep.equal(34);
});

it('Test Case #11', function() {
  chai.expect(program.getNthFib(11)).to.deep.equal(55);
});

it('Test Case #12', function() {
  chai.expect(program.getNthFib(12)).to.deep.equal(89);
});

it('Test Case #13', function() {
  chai.expect(program.getNthFib(13)).to.deep.equal(144);
});

it('Test Case #14', function() {
  chai.expect(program.getNthFib(14)).to.deep.equal(233);
});

it('Test Case #15', function() {
  chai.expect(program.getNthFib(15)).to.deep.equal(377);
});

it('Test Case #16', function() {
  chai.expect(program.getNthFib(16)).to.deep.equal(610);
});

it('Test Case #17', function() {
  chai.expect(program.getNthFib(17)).to.deep.equal(987);
});

it('Test Case #18', function() {
  chai.expect(program.getNthFib(18)).to.deep.equal(1597);
});


