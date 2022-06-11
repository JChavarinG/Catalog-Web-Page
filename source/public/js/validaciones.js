// Validación del input de nombre y apellido para permitir solo letras [A-Z]
for(const textbox of document.getElementsByClassName('textbox')) {
    // Validación de input de nombre y apellido utilizando expresión regular
    textbox.addEventListener('keypress', (event) => {
        let ch = String.fromCharCode(event.which);
        if(!/^[a-zA-Z\s]*$/.test(ch)) {
            event.preventDefault();
        }
    });
    
    // Evitar que se puede pegar sobre el cuadro de texto
    textbox.onpaste = e => {
        e.preventDefault();
        return false;
    };
    
    // Evitar que se arrastrar sobre el cuadro de texto
    textbox.ondragstart = e => {
        e.preventDefault();
        return false;
    }
    
    textbox.ondrop = e => {
        e.preventDefault();
        return false;
    }
}

// Validación del input de teléfono para permitir solo números [0-9]
let telbox = document.getElementById('tel');

// Validación de input numérico utilizando expresión regular
telbox.addEventListener('keypress', (event) => {
    let ch = String.fromCharCode(event.which);
    if(!/^[0-9]+$/.test(ch)) {
        event.preventDefault();
    }
});

// Evitar que se puede pegar sobre el cuadro de texto
telbox.onpaste = e => {
    e.preventDefault();
    return false;
};

// Evitar que se arrastrar sobre el cuadro de texto
telbox.ondragstart = e => {
    e.preventDefault();
    return false;
}

telbox.ondrop = e => {
    e.preventDefault();
    return false;
}