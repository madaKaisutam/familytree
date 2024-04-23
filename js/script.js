function showPictures(data, value) {
    const imgArray = data[value]["img"]
    const carouselContainer = document.getElementById('carouselContainer');
    carouselContainer.innerHTML = '';
    for (i of imgArray) {
        console.log(i);
        const img = document.createElement('img');
        img.src = i;
        carouselContainer.appendChild(img);
    }
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const images = document.querySelectorAll('.carousel img');
    let currentIndex = 0;

    function showPrevImage() {
        images[currentIndex].style.display = 'none';
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        images[currentIndex].style.display = 'flex';
    }

    function showNextImage() {
        images[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.display = 'flex';
    }

    prevButton.addEventListener('click', showPrevImage);

    nextButton.addEventListener('click', showNextImage);
}

function showName(data, value) {
    const name = data[value]['fname'] + " " + data[value]['sname']
    const cnameContainer = document.getElementById('name');
    cnameContainer.innerHTML = '';
    const nameEL = document.createElement('p');
    nameEL.textContent = name;
    cnameContainer.appendChild(nameEL)
}

function showCard (card) {
    const showCardButton = document.querySelectorAll('#btn_toSMT_top');
    showCardButton.forEach((button) => {
        button.addEventListener('click', (event) => {
            card.classList.toggle('hidden');
            let value = event.target.dataset.value;
            value = value.toString()
            fetch('data.json')
            .then(response => response.json())
            .then(data => {
                showPictures(data, value)
                showName(data, value)
            })
        });
        
    })
}

function closCard(card) {
    const closeButton = document.getElementById('closeButton');
    closeButton.addEventListener('click', () => {
        card.classList.add('hidden');
    });
}



document.addEventListener('DOMContentLoaded', function() {
    const card = document.getElementById('info_card');
    showCard(card)
    closCard(card)
    document.getElementById('btn_toSMT_top_kaz').addEventListener('click', function() {
        console.log('hhhh');
        // Load new content from new_content.html into the container
        fetch('przybylski_family.html')
            .then(response => response.text())
            .then(html => {
                console.log(html);
                document.getElementById('main_con').innerHTML = '';
                document.getElementById('main_con').innerHTML = html;
            });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginBtn').addEventListener('click', function() {
        // Load new content from new_content.html into the container
        fetch('login.html')
            .then(response => response.text())
            .then(html => {
                console.log(html);
                document.getElementById('main_con').innerHTML = '';
                document.getElementById('main_con').innerHTML = html;
            });
    });
});


