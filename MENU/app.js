// items
const menu = [
    {
        id: 1,
        title: 'Playera Glow-in-the-Dark',
        category: 'Playera' ,
        price: 39.80, 
        img: 'images/item-1.jpg',
        desc: 'La camiseta "No Hay Luz Sin Oscuridad" presenta elementos de la portada del álbum impresos en la parte delantera y trasera de la camiseta. ',
    },
    {
        id: 2,
        title: 'Mor, No Le Temas a La Oscuridad',
        category: 'CD' ,
        price: 200.00, 
        img: 'images/item-2.png',
        desc: 'Las imágenes son simulaciones y los productos finales terminados pueden tener variaciones de lo que se muestra una vez que todo el arte de embalaje esté finalizado en el proceso de producción',
    },
    {
        id: 3,
        title: 'Feliz Cumpleaños Ferxxo (Hoddie)',
        category: 'Hoodie' ,
        price: 1000.00, 
        img: 'images/item-3.png',
        desc: 'Parte de la colección oficial de merch para el nuevo álbum de Feid, el hoodie Feliz Cumpleaños Ferxxo contiene elementos del arte del sencillo impreso en la parte posterior.',
    },
    {
        id: 4,
        title: 'Linterna de Luz Negra',
        category: 'Linterna' ,
        price: 1100.00, 
        img: 'images/item-4.png',
        desc: 'Feid Black Light te permitirá ver la portada oculta de MOR, No Le Temas a La Oscuridad. La luz funciona con todas las impresiones UV y presenta el logotipo de Feid.',
    },
    {
        id: 5,
        title: 'FERXXO (VOL 1: M.O.R) 2LP White Vinyl',
        category: 'CD' ,
        price: 1000.00, 
        img: 'images/item-5.png',
        desc: 'Para su tercer álbum de estudio, FERXXO (VOL 1: M.O.R), lanzado el 23 de abril de 2020, Feid creó la personalidad "Ferxxo", un alter ego que representa un lado diferente y sonoramente distinto de su música.',
    },
    {
        id: 6,
        title: 'Playera FRIKI',
        category: 'Playera' ,
        price: 350.00, 
        img: 'images/item-6.png',
        desc: 'La imagen que se muestra es una simulación y el producto final puede tener ligeras variaciones de color o impresión de acuerdo a las técnicas que se utilizan en cada prenda.'
    },
    {
        id: 7,
        title: 'Ferxxocalipsis CD',
        category: 'CD' ,
        price: 13.98, 
        img: 'images/item-7.png',
        desc: 'Este EP de diez pistas lanzado el 1 de diciembre de 2023 se ha convertido en un elemento básico del reggaetón moderno, generando el éxito instantáneo "LUNA", con ATL Jacob. Importado.',
    },
    {
        id: 8,
        title: 'Gorra de béisbol para mujeres y hombres',
        category: 'Gorra' ,
        price: 699.80, 
        img: 'images/item-8.png',
        desc: 'Ofreciendo un estilo versátil que se puede llevar para deportes al aire última intervensión o como un accesorio casual.',
    },
    {
        id: 9,
        title: 'Ferxxo Lentes de sol',
        category: 'Lentes' ,
        price: 718.80, 
        img: 'images/item-9.png',
        desc: 'Estos lentes de sol inspirados en FERXXO y el futurismo con forma rectangular tienen un marco frontal envolvente que se caracteriza por la mano de obra tridimensional y las líneas gruesas y letras blancas escritas en los lentes negros.',
    },
    {
        id: 10,
        title: 'Feid  oficial Gorra',
        category: 'Gorra' ,
        price: 219.80, 
        img: 'images/item-10.png',
        desc: 'Corona estructurada de perfil medio-alto con visera curvada y forro interior.',
    },
];

const sectionCenter =  document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');


// Carga de Items
window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu);
    displayMenuButtons();
});

function displayMenuItems (menuItems) {
    let displayMenu = menuItems.map(function (item) {
        // console.log(item);

        return `<article class = "menu-item">
            <img src = ${item.img} alt = ${item.title} class = "photo" />
            <div class = "item-info">
                <header>
                    <h4> ${item.title} </h4> 
                    <h4  class = "price"> $${item.price} </h4>
                </header>
                <p class = "item-text"> ${item.desc} </p>
            </div>
        </article>`;
    });
    displayMenu = displayMenu.join('');

    sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
    const categories = menu.reduce(function (values, item) {
        if(!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    },
        ['Todos']
    );
    const categoryBtns = categories.map(function (category) {
        return `<button class = "filter-btn" 
        type = "button" data-id = ${category}> 
            ${category}
        </button>`;
    })
    .join('');

    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll('.filter-btn');
    console.log(filterBtns);
    
    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {

        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if(menuItem.category === category) {
            return menuItem;
            }
        });
        // console.log(menucategory);
        if(category === 'Todos') {
            displayMenuItems(menu);
        } else {
            displayMenuItems(menuCategory);    
        }
    });
});
}