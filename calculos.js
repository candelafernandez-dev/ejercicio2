function calcular() {

    // Variables del DOM
    const sueldo = parseFloat(document.getElementById('sueldo').value);
    let nsue = sueldo;


    if (sueldo < 1000) {
        nsue = sueldo + (sueldo * 15 / 100);
    }

    document.getElementById('nuevosueldo').innerText = `${nsue.toFixed(2)}`;
}

function calcular2() {

    // Variables del DOM
    const sueldo = parseFloat(document.getElementById('sueldo2').value);
    let nsue = sueldo;

    if (sueldo < 1000) {
        nsue = sueldo + (sueldo * 15 / 100);
    } else {
        nsue = sueldo + (sueldo * 12 / 100);
    }

    document.getElementById('nuevosueldo2').innerText = `${nsue.toFixed(2)}`;
}

function calcular3() {

    // Variables del DOM
    const sueldo = parseFloat(document.getElementById('sueldo3').value);
    const categoria = parseFloat(document.getElementById('categoria').value);
    let nsue = sueldo;

    switch (parseInt(categoria)) {

        case 1:
            nsue = sueldo + (sueldo * 15 / 100);
            break;
        case 2:
            nsue = sueldo + (sueldo * 12 / 100);
            break;
        case 3:
            nsue = sueldo + (sueldo * 10 / 100);
            break;
        case 4:
            nsue = sueldo + (sueldo * 8 / 100);
            break;
    }

    document.getElementById('nuevosueldo3').innerText = `${nsue.toFixed(2)}`;
}