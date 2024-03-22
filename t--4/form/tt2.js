var personNames = [];
var personAges = [];

do {
    var numberOfPersons = prompt("Enter number of persons");
} while (isNaN(numberOfPersons) || numberOfPersons === '' || numberOfPersons === null || numberOfPersons == 0);

numberOfPersons = Number(numberOfPersons);

for (var i = 0; i < numberOfPersons; i++) {
    do {
        var currentName = prompt("Enter the person's name " + (i + 1));
    } while (!currentName || currentName.length > 10 || currentName.length < 2);

    personNames.push(currentName);

    do {
        var currentAge = prompt("Enter the person's age " + (i + 1));
    } while (isNaN(currentAge) || currentAge <= 0);

    personAges.push(currentAge);
}

console.log(personNames);
console.log(personAges);

var tableBody = document.getElementsByTagName('tbody')[0];

for (var j = 0; j < personNames.length; j++) {
    tableBody.innerHTML += '<tr><td>' + personNames[j] + '</td><td>' + personAges[j] + '</td></tr>';
}
