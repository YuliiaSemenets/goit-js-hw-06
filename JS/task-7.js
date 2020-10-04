const calculateTotalBalance = (array) =>
  array.reduce((users, { balance }) => {
    return balance + users;
  }, 0);

console.log(calculateTotalBalance(users));
// 20916
