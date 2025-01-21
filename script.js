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

// console.log(dossierPrincipal.nom);
// console.log(typeof dossierPrincipal);
// console.log(dossierPrincipal);

const afficherDossier = () => {
  return dossierPrincipal.nom;
};

// console.log(afficherDossier());

const afficherDossierIteratif = () => {
  console.log(dossierPrincipal.nom);
  for (let item of dossierPrincipal.contenu) {
    console.log(item.nom);
  }
};
afficherDossierIteratif();

// const afficherDossierRecursif = () => {};
