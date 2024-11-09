const totalImages = 40;
const imageFolder = 'images/';

document.getElementById('randomImageBtn').addEventListener('click', () => {
    let cycleInterval;
    const randomImageElement = document.getElementById('randomImage');
    let counter = 0;
    cycleInterval = setInterval(() => {
        const cycleImage = `${imageFolder}image${(counter % totalImages) + 1}.jpg`;
        randomImageElement.src = cycleImage;
        counter++;
    }, 1);
    setTimeout(() => {
        clearInterval(cycleInterval);
        const finalRandomIndex = Math.floor(Math.random() * totalImages) + 1;
        const finalImage = `${imageFolder}image${finalRandomIndex}.jpg`;
        randomImageElement.src = finalImage;
    }, 3000);
});

