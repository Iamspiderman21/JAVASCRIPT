//  clientes
 const text = [
    'Sanmina diseña, fabrica y repara algunos de los productos ópticos, electrónicos y mecánicos más complejos e innovadores del mundo. Sanmina, reconocida como líder en tecnología, brinda soluciones integrales de diseño, fabricación y logística, brindando calidad y soporte superiores a los fabricantes de equipos originales (OEM) principalmente en las redes de comunicaciones, informática y almacenamiento, médica, de defensa y aeroespacial, industrial y Sectores de semiconductores, multimedia, automoción y tecnologías limpias.',
    'Molex es una empresa fabricante de interconexiones electrónicas incluyendo conectores de cables eléctricos y fibras ópticas entre otros productos.​',
    'Flex LTD. Es una empresa norteamericana fundada en Singapur en 1969, la cual fue traída a Occidente, a Silicon Valley al norte de California. Esta empresa está dedicada a ofrecer soluciones de la industria electrónica, desde el diseño, manufactura, distribución y servicio de garantía.',
    'Jabil Inc. es una empresa de fabricación multinacional estadounidense involucrada en el diseño, ingeniería y fabricación de conjuntos y sistemas de placas de circuitos electrónicos, junto con servicios de cadena de suministro, que atiende principalmente a fabricantes de equipos originales.',
    'Continental AG es una empresa alemana con sede principal en Hanóver. Está constituida legalmente como una sociedad anónima. El presidente del consejo de administración es Eihmar Degenhart.',
    'ABB es una corporación multinacional tecnológica sueco-suiza con sede central en Zúrich, ​ Suiza que se especializa en robótica, generación de energía eléctrica, automatización, equipamientos industriales, motores, movilidad y otras tecnologías de electrificación e ingeniería.',
    'FORVIA es un grupo de tecnología automotriz en el corazón de una movilidad más inteligente y sustentable. Una empresa innovadora a escala global que reúne experiencia en electrónicos, movilidad limpia, iluminación, interiores, asientos y lifecycle solutions.',
    'Positron Inc es una empresa holding y operativa que brinda servicios financieros, de marketing y operativos a sus subsidiarias, que incluyen Positron Access Solutions, Positron Power, Positron Telecommunication Systems y Positron Investments.',
    'Valeo, es proveedor del sector automotriz y socio estratégico de todos los fabricantes de automóviles del mundo. Es el proveedor líder en tecnologías de última generación.',
    'Plexus International es un líder mundial en la proveeduría especializada de soluciones integrales de capacitación, consultoría, evaluación y aplicaciones de software a organizaciones de la cadena de suministro de global.',
    'Harman International Industries, Inc., comúnmente conocida como Harman, es una empresa estadounidense de electrónica de audio. Desde 2017, la empresa opera como una subsidiaria independiente de Samsung Electronics.',
    'Magna International Inc. es una compañía austro-canadiense con sede en Aurora, Ontario, Canadá. Es el mayor fabricante de componentes para automóviles de Canadá.',
 ];

 const form =  document.querySelector('.lorem-form');
 const amount = document.getElementById('amount');
 const result =  document.querySelector('.lorem-text');

form.addEventListener('sumbit', function (e) {
   e.preventDefault();

    const value = parseInt(amount.value);
    const random = Math.floor(Math.random() * text.length);

   
    if (isNaN(value) || value < 0 || value > 9) {
        result.innerHTML = `<p class = "result">${text[random]}</p>`;
    } else {
        let tempText = text.slice(0, value);
        tempText = tempText.map(function(item) {
            return `<p class = "result">${item}</p>`;
        })
        .join('');
        result.innerHTML = tempText;
    }
});