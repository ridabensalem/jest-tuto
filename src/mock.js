// division.js
function divideBill(total, people) {
  if (people === 0) throw new Error("Cannot divide by zero");
  return total / people;
}

function sayMessage() {
  return "Free Palestine";
}

module.exports = { divideBill, sayMessage };
