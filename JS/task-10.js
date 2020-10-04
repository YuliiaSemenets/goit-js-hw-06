const getSortedUniqueSkills = (array) =>
  [...array]
    .reduce((users, { skills }) => [...users, ...skills], [])
    .sort()
    .filter((current, index, arr) => arr.indexOf(current) === index);

console.log(getSortedUniqueSkills(users));
