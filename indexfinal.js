// INTEGRATION FINAL
const textarea = document.getElementById('pliable-textarea');
const messageBox = document.getElementById('message-box');

textarea.addEventListener('input', () => {
    const textLength = textarea.value.length;

    const randomX = Math.floor(Math.random() * 91) - 45; // -45° à 45°
    const randomY = Math.floor(Math.random() * 91) - 45; // -45° à 45°
    const randomZ = Math.floor(Math.random() * 91) - 45; // -45° à 45°

    const scale = 0.9 + Math.random() * 0.2; // Entre 0.9 et 1.1

    const blur = Math.min(textLength / 5, 10); // Max 10px

    textarea.style.transform = `rotateX(${randomX}deg) rotateY(${randomY}deg) rotateZ(${randomZ}deg) scale(${scale})`;
    textarea.style.filter = `blur(${blur}px)`;

    if (textLength >= 15) {
        messageBox.style.visibility = 'visible'; // Afficher le message
    } else {
        messageBox.style.visibility = 'hidden'; // Cacher le message
    }

    if (textLength >= 15) {
        textarea.style.filter = `blur(${Math.min(textLength / 5, 10)}px)`; // Flou de plus en plus fort avec les caractères
}
});
