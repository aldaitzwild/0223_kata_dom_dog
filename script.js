const btnDog = document.getElementById('add_dog');

btnDog.addEventListener('click', function () {
    const imgDog = document.createElement('img');
    imgDog.src = 'dog.jpg';

    imgDog.addEventListener('click', function() {
        this.src = 'cat.jpg';
    });
    
    const animals = document.getElementById('animals');
    animals.append(imgDog);
});