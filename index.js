const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const listaTareas = document.querySelector('.lista-tareas');
const buscarTarea = document.querySelector('#buscar-tarea');

const main = () => {
    form.addEventListener('submit', (e)=>{
        e.preventDefault(); 
        const tarea = input.value.trim(); 

        if (tarea !== '') { 
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        const span = document.createElement('span');
        const botonEliminar = document.createElement('button');


        checkbox.type = 'checkbox';
        span.textContent = tarea;
        botonEliminar.textContent = 'Delete';

        
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(botonEliminar);
        listaTareas.appendChild(li);
        input.value = '';
        }
    });


    listaTareas.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') { 
          const li = e.target.parentNode; 
          li.remove(); 
        }
    });

    buscarTarea.addEventListener('input', () => {
        const textoBusqueda = buscarTarea.value.toLowerCase();
        const tareas = listaTareas.querySelectorAll('li');

        tareas.forEach(function(tarea) {
        const nombreTarea = tarea.querySelector('span').textContent.toLowerCase();
        if (nombreTarea.includes(textoBusqueda)) {
            tarea.style.display = 'block';
        } else {
            tarea.style.display = 'none';
        }
        });
    });
};

main();