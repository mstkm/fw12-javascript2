const names = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope'];
const char = 'an';
const limit = 3;

const dataName = names.map(name => name.toLowerCase());
function checkName (name) {
    return name.includes(char.toLowerCase());
};
const filterName = dataName.filter(checkName).sort().slice(0, limit);
const searchNames = filterName.map(name => name.charAt(0).toUpperCase() + name.slice(1));

console.log(searchNames);
