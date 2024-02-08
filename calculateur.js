document.getElementById('calculer').addEventListener('click', function() {
    var inputs = document.getElementsByClassName('note');
    var total = 0;
    var count = 0;
    for (var i = 0; i < inputs.length; i++) {
        var note = parseFloat(inputs[i].value);
        if (!isNaN(note)) {
            total += note;
            count++;
        }
    }
    if (count > 0) {
        var moyenne = total / count;
        document.getElementById('resultat').innerText = "La moyenne est : " + moyenne.toFixed(2);
    } else {
        document.getElementById('resultat').innerText = "Veuillez entrer au moins une note.";
    }
});
