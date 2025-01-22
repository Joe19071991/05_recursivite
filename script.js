const dossierPrincipal = {
  nom: "Ada",
  contenu: [
    {
      nom: "Projets collectifs Ada",
      contenu: [
        {
          nom: "Pico8",
          contenu: [
            {
              nom: "mariokart.p8",
            },
          ],
        },
        {
          nom: "Dataviz",
          contenu: [
            {
              nom: "index.html",
            },
            {
              nom: "script.js",
            },
          ],
        },
      ],
    },
    { nom: "CV.pdf" },
    {
      nom: "Projets persos",
      contenu: [
        {
          nom: "Portfolio",
          contenu: [
            {
              nom: "index.html",
            },
            {
              nom: "script.js",
            },
          ],
        },
      ],
    },
  ],
};

console.log(dossierPrincipal.nom);
// console.log(typeof dossierPrincipal);
console.log(dossierPrincipal);

const afficherDossier = () => {
  return dossierPrincipal.nom;
};

// console.log(afficherDossier());

const afficherDossierIteratif = () => {
  console.log(dossierPrincipal.nom);
  for (let dossier of dossierPrincipal.contenu) {
    console.log(dossier.nom);
  }
};
afficherDossierIteratif();

const afficherDossierRecursif = (dossier) => {
  if (dossier.contenu === undefined) {
    return;
  }
  for (let item of dossier.contenu) {
    console.log(item.nom);
    afficherDossierRecursif(item);
  }
};
afficherDossierRecursif(dossierPrincipal);
