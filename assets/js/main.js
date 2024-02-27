
document.querySelectorAll('.menu-movil div ')
    .forEach(div => {
        div.addEventListener('click', (e) =>{
            const buscarPadre = (elem,clase) => (elem.className===clase)?elem:buscarPadre(elem.parentElement,clase);
            buscarPadre(e.target,"menu-movil").removeAttribute("open");
        });
    });

    let form = document.getElementById('formulario');
    let eresp = document.getElementById('respuesta-formulario');

    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        
        fetch(form.action, {
            method: 'POST',
            body: new FormData(form)
         })
         .then((response)=> {
            if(response.ok) {
                return response.text()
            } else {
                throw "Error en la llamada Remota";
            }
         
         })
         .then((texto)=>{
            console.log('esta es la respuesta',texto);
            eresp.className = "respuesta-formulario respuesta-formulario-ok"
            eresp.innerHTML = texto;
         })
         .catch((err)=> {
            console.log(err);
            eresp.className = "respuesta-formulario respuesta-formulario-error"
            eresp.innerHTML = err;
         });

     }); 




