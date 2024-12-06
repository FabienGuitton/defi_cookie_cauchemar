// INTEGRATION 2
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let blocks = [];

// Créer les blocs qui tombent
function createFallingBlock() {
    const letter = letters[Math.floor(Math.random() * letters.length)];
    const block = document.createElement('div');
    block.className = 'fallingBlock';
    block.textContent = letter;
    block.style.left = `${Math.random() * (window.innerWidth - 80)}px`; // Position x aléatoire

    document.body.appendChild(block);

    // Animer la chute du bloc
    let posY = -80;
    const fallSpeed = Math.random() * 2 + 3; // Vitesse de chute aléatoire

    function fall() {
        posY += fallSpeed;
        block.style.top = `${posY}px`;
        // Si le bloc sort de l'écran, le supprimer
        if (posY > window.innerHeight) {
            block.remove();
            blocks = blocks.filter(b => b !== block); // Retirer le bloc de l'array
        } else {
            requestAnimationFrame(fall);
        }
    }

    fall();

    block.addEventListener('click', () => {
        const textField = document.getElementById('textField');
        textField.value += letter;
        checkForActivation();
    });

    blocks.push(block);
}

// Fonction pour vérifier si "oui" est dans le champ de texte
function checkForActivation() {
    const textField = document.getElementById('textField');
    const actionButton = document.getElementById('actionButton');
    const buttonContainer = document.getElementById('buttonContainer');

    if (textField.value.includes("OUI")) {
        actionButton.disabled = false; // Activer le bouton
        buttonContainer.style.display = "block"; // Afficher le container du bouton
    } else {
        actionButton.disabled = true; // Désactiver le bouton
        buttonContainer.style.display = "none"; // Cacher le container du bouton
    }
}

// Créer un nouveau bloc toutes les 500ms
setInterval(createFallingBlock, 500);
