//Datos locales
const reviews = [
    {
        id: 1,
        name: "Feid Salomon",
        job: "Cantante",
        img: "https://phantom-marca.unidadeditorial.es/fb76a1da436aa5beeb2351c292660e1b/resize/828/f/jpg/assets/multimedia/imagenes/2023/12/20/17030598776877.jpg",
        text: "El artista inició su carrera musical desde muy joven, sin embargo, su camino como artista empezó como compositor de conocidos artistas urbanos, como J Balvin y Maluma, a través de quienes demostró su talento con las letras de canciones.",

    },
    {
        id: 2,
        name: "Bad Bunny",
        job: "Cantante",
        img: "https://www.elsoldemexico.com.mx/gossip/celebridades/j2y6d4-bad-bunny.jpg/ALTERNATES/LANDSCAPE_1140/Bad%20Bunny.jpg",
        text: "Benito Antonio Martínez Ocasio ​ conocido artísticamente como Bad Bunny, es un cantante, compositor, productor discográfico y luchador puertorriqueño.",
    },
    {
        id: 3,
        name: "Adam Levine",
        job: "Cantante",
        img: "https://lastfm.freetls.fastly.net/i/u/ar0/dbcfd1f3fdca4609c61026c7009e3e15.jpg",
        text: "Adam Noah Levine es un cantante, compositor y actor estadounidense, conocido por ser el líder de la banda Maroon 5. ",
    },
    {
        id: 4,
        name: "Tom Holand",
        job: "Actor",
        img: "https://www.elsoldeacapulco.com.mx/incoming/pu448i-tom-holland.jpg/ALTERNATES/LANDSCAPE_1140/tom%20holland.jpg",
        text: "Thomas Stanley Holland, conocido simplemente como Tom Holland, es un actor, actor de voz y bailarín británico.",
    },
];


    //Seleccionar items 
    const img = document.getElementById('person-img');
    const author = document.getElementById('author');
    const job = document.getElementById('job');
    const info = document.getElementById('info');

    const prevBtn = document.querySelector('.prev-btn')
    const nextBtn = document.querySelector('.next-btn')
    const randomBtn = document.querySelector('.random-btn')
    

    // Comieza el item
    let currentItem =  0;

    // Carga inicial del item
    window.addEventListener('DOMContentLoaded', function () {
        const item = reviews[currentItem];
        img.src = item.img;
        author.textContent = item.name;
        job.textContent = item.job;
        info.textContent = item.text;
    });

    // Muestra la persona en el item
    function showPerson(person) {
        const item = reviews [person];
        img.src = item.img;
        author.textContent = item.name;
        job.textContent = item.job;
        info.textContent = item.text;
    }

    //Muestra la siguiente persona
    nextBtn.addEventListener('click', function () {
        currentItem++;
        if(currentItem > reviews.length -1) {
            currentItem = 0;
        }
        showPerson(currentItem);
    });

    //Muestra la anterior persona
    prevBtn.addEventListener('click', function () {
        currentItem--;
        if ( currentItem < 0) {
            currentItem = reviews.length -1
        }
        showPerson(currentItem);
    });

    //Muestra la aleatorio la persona
    randomBtn.addEventListener('click', function() {
        console.log('Hola');

        currentItem = Math.floor(Math.random() * reviews.length)
        showPerson(currentItem);
    });