var studenti = [];

for (var i = 0; i < 3; i++) {
  var nome = prompt("inserire il nome");
  var cognome = prompt("inserire il cognome");
  var eta = parseInt(prompt("inserire l'eta"));

  var persona =
    {
      nome : nome,
      cognome : cognome,
      eta : eta
    };

  var id =persona.nome+" "+persona.cognome+" "+persona.eta;

  studenti.push(id);
}

console.log(studenti);
