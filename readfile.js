const fs = require('fs');
const fileName = 'mon_fichier.txt';

fs.writeFile(fileName, '', 'utf8', function(err) {
    console.log("Fichier vide créé.");
    if (err) { console.trace(err); return }

    fs.writeFile(fileName, "Bonjour, Node.js !", 'utf8', function(err) {
        console.log("Fichier mise à jour.");
        if (err) { console.trace(err); return }

        fs.readFile(fileName, 'utf8', function(err, data) {
            if (err) { console.trace(err); return }

            console.log(data);
        });
    });
});
