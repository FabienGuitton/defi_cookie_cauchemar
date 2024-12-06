// INTEGRATION 3
const popups = [
    "Avez-vous pensé à sauvegarder vos informations ?",
    "N'oubliez pas de vérifier vos données avant de soumettre !",
    "C'est une journée magnifique !",
    "Pourquoi ne pas essayer un autre formulaire ?",
    "Pop-up aléatoire ici !",
    "Pensez à consulter nos offres spéciales !",
    "Tu as encore oublié de remplir quelque chose ! C'est pas possible !",
    "Ça va prendre combien de temps pour finir ce formulaire ?"
];

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.href = "./indexfinal.html";
});

function showRandomPopup() {
    const popup = document.getElementById("popup");

    if (popup.style.display === "flex") {
        return;  // Ne rien faire si une pop-up est déjà affichée
    }

    const randomMessage = popups[Math.floor(Math.random() * popups.length)];
    popup.textContent = randomMessage;
    popup.style.display = "flex";

    const inputs = document.querySelectorAll('input[type="text"], input[type="email"]');
    inputs.forEach(input => input.disabled = true);

    const displayTime = Math.random() * (3000 - 1000) + 2000;

    setTimeout(() => {
popup.style.display = "none";  // Cacher la pop-up

        inputs.forEach(input => input.disabled = false);
    }, displayTime);
}

setInterval(showRandomPopup, Math.random() * (3000 - 1000) + 3000);
