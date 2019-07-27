
var procesos = [//Datos de prueba
    { posicionMesa: 1, estado: 'pensando' },
    { posicionMesa: 2, estado: 'pensando' },
    { posicionMesa: 3, estado: 'pensando' },
    { posicionMesa: 4, estado: 'pensando' },
    { posicionMesa: 5, estado: 'pensando' }
];

var tiempo = 3; //segundos
var band = true;
var terminado = true;

var comesalesBocadillo = [
    document.getElementById('comesal-1'),
    document.getElementById('comesal-2'),
    document.getElementById('comesal-3'),
    document.getElementById('comesal-4'),
    document.getElementById('comesal-5')
]

inicializacion();

function inicializacion() {

    for (let i = 0; i < comesalesBocadillo.length; i++) {
        comesalesBocadillo[i].style.display = 'none';
    }
}


function iniciar() {

    band = true
    algoritmo();


}

function algoritmo() {

    inicializacion();
    procesos[0].estado = 'comiendo';
    comesalesBocadillo[0].style.display = 'block';
    console.log('Filosofo en el puesto 1 comiendo')
    procesos[2].estado = 'comiendo';
    comesalesBocadillo[2].style.display = 'block';
    console.log('Filosofo en el puesto 3 comiendo')

    setTimeout(() => {
        inicializacion();

        procesos[1].estado = 'comiendo';
        comesalesBocadillo[1].style.display = 'block';
        console.log('Filosofo en el puesto 2 comiendo')
        procesos[3].estado = 'comiendo';
        comesalesBocadillo[3].style.display = 'block';
        console.log('Filosofo en el puesto 4 comiendo')

        setTimeout(() => {
            inicializacion();

            procesos[4].estado = 'comiendo';
            comesalesBocadillo[4].style.display = 'block';
            console.log('Filosofo en el puesto 5 comiendo')

            procesos[2].estado = 'comiendo';
            comesalesBocadillo[1].style.display = 'block';
            console.log('Filosofo en el puesto 3 comiendo')

            if (band) {
                setTimeout(() => {
                    algoritmo()
                }, tiempo * 1000);
            }

        }, tiempo * 1000);

        console.log(band)

    }, tiempo * 1000);


    console.log(band)
}

function cancelar() {
    band = false;
}