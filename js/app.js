const personas = [
    new Persona('Juan', 'Perez'),
    new Persona('Karla', 'Gomez')
];

function mostrarPersonas(){
    console.log('Función mostrarPersonas...');
    let texto = '';
    for(let persona of personas){
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona(){
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    if(nombre != '' && apellido != ''){
        const persona = new Persona(nombre.value, apellido.value);
        personas.push(persona);
        mostrarPersonas();
    }
}