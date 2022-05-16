const ajouterErreurChamp = (ligne, colonne) => {
    const input = document.getElementById('case' + ligne + '-' + colonne)
    input.classList.add('error')
    input.addEventListener('input', () => {
        input.classList.remove('error')
    }, {once : true})
}

const verifier = () => {
    // Vérifier que les nombres saisis sont bien des nombre de 1 à 9
    
    // Récupérer tous les inputs de la page
    const listeInput = document.querySelectorAll('input')

    // Enlever toutes les classes invalides
    for (const i of listeInput) {
        i.classList.remove("error")
    }

    // Chacun des inputs
    for (const input of listeInput) {
        // Vérifier que le champs est valide
        const validInput = input.checkValidity()

        if (validInput === false) {
            // Si ce n'est pas valide on arrête le programme
            return 
        }
    }

    // Tableau qui contient toutes les lignes
    const sudoku = []

    // récupérer toutes les valeurs
    for (let ligne = 0; ligne < 9; ligne++) {
        const sudokuLigne = []

        for (let colonne = 0; colonne < 9; colonne++) {
            const identifiant = 'case' + ligne + '-' + colonne 
            const input = document.getElementById(identifiant)
            const valeur = input.value
            // console.log(identifiant) // debugage
            
            // Si valeur est un champ texte vide
            // Alors l'utilisateur n'a rien saisi
            // Si valeur n'est pas vide 
            // Alors l'utilisateur a saisi quelque chose
            // Transformer la valeur en nombre
            const nombre = (valeur === '') ? '' : parseInt(valeur, 10)

            // Ajouter la valeur a la ligne
            sudokuLigne.push(nombre)
        }

        // Ajouter la ligne au sudoku
        sudoku.push(sudokuLigne)
    } 
    // console.log(sudoku) // debugage

    // Vérifier qu'il n'y a pas de doublons dans les lignes
    // Parcours des lignes
    for (let ligne = 0; ligne < 9; ligne++) {
        const liste = new Set()
        // Parcours des éléments de la ligne
        for (let colonne = 0; colonne < 9; colonne++) {
            const val = sudoku[ligne][colonne]

            // Tester si la valeur est vide
            // Si la valeur est vide ne rien faire
            if (val == "") {
                // rien
            } else {
                // Sinon 
                // Vérifier que l'élément n'est pas dans la liste
                if (!liste.has(val)) {
                    // Ajouter l'élément a une liste
                    liste.add(val)
                } else {
                    // console.log("Erreur doublons " + ligne  + "_" + colonne)
                    // Ajouter une classe d'erreur
                    ajouterErreurChamp(ligne, colonne)
                }
            }
        }
    }
    
    // Parcours des colonnes
    for (let colonne = 0; colonne < 9; colonne++) {
        const liste = new Set()
        // Parcours des éléments de la ligne
        for (let ligne = 0; ligne < 9; ligne++) {
            const val = sudoku[ligne][colonne]

            // Tester si la valeur est vide
            // Si la valeur est vide ne rien faire
            if (val == "") {
                // rien
            } else {
                // Sinon 
                // Vérifier que l'élément n'est pas dans la liste
                if (!liste.has(val)) {
                    // Ajouter l'élément a une liste
                    liste.add(val)
                } else {
                    // console.log("Erreur doublons " + ligne  + "_" + colonne)
                    // Ajouter une classe d'erreur
                    ajouterErreurChamp(ligne, colonne)
                }
            }
        }
    }

    // Indices des carrées
    const carree = [
        // premiere région
        [
            [0,0], [0,1], [0,2],
            [1,0], [1,1], [1,2],
            [2,0], [2,1], [2,2],
        ],
        // seconde région
        [
            [3,0], [3,1], [3,2],
            [4,0], [4,1], [4,2],
            [5,0], [5,1], [5,2], 
        ],
        // troisieme région
        [
            [6,0], [6,1], [6,2],
            [7,0], [7,1], [7,2],
            [8,0], [8,1], [8,2],
        ],
        // quatrieme région
        [
            [0,3], [0,4], [0,5],
            [1,3], [1,4], [1,5],
            [2,3], [2,4], [2,5],
        ],
        // cinquieme région
        [
            [3,3], [3,4], [3,5],
            [4,3], [4,4], [4,5],
            [5,3], [5,4], [5,5],
        ],
        // sixieme région
        [
            [6,3], [6,4], [6,5],
            [7,3], [7,4], [7,5],
            [8,3], [8,4], [8,5],
        ],
        // septieme région
        [
            [0,6], [0,7], [0,8],
            [1,6], [1,7], [1,8],
            [2,6], [2,7], [2,8],
        ],
        // huitieme région
        [
            [3,6], [3,7], [3,8],
            [4,6], [4,7], [4,8],
            [5,6], [5,7], [5,8],
        ],
        // neuvieme région
        [
            [6,6], [6,7], [6,8],
            [7,6], [7,7], [7,8],
            [8,6], [8,7], [8,8],
        ]
    ]

    // Utiliser les carrées pour vérifier la présence des doublons
    // Parcours des régions
    for (const c of carree) {
        const liste = new Set()
        // Pour chaque carrées  
        for (const element of c) {
            const ligne = element[0]
            const colonne = element[1]
            const val = sudoku[ligne][colonne]

            // Tester si la valeur est vide
            // Si la valeur est vide ne rien faire
            if (val == "") {
                // rien
            } else {
                // Sinon 
                // Vérifier que l'élément n'est pas dans la liste
                if (!liste.has(val)) {
                    // Ajouter l'élément a une liste
                    liste.add(val)
                } else {
                    // console.log("Erreur doublons " + ligne  + "_" + colonne)
                    // Ajouter une classe d'erreur
                    ajouterErreurChamp(ligne, colonne)
                }
            }
        }
    }
}

// Récupérer le bouton
const button = document.getElementById('verif')

// Assigner l'évènement clic à la fonction vérifier
button.addEventListener("click", verifier)