const names = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope'];
// const char = 'an';
// const limit = 3;

function searchName (char, limit, callback) {
    const dataName = names.map(name => name.toLowerCase());
    const filterName = dataName.filter(name => name.includes(char.toLowerCase())).sort().slice(0, limit);
    const resultSearch = filterName.map(name => name.charAt(0).toUpperCase() + name.slice(1));
    
    callback(resultSearch);
};

function showResult (result) {
    console.log(result);
};

searchName('an', 3, showResult);
