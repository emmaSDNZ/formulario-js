document.addEventListener('DOMContentLoaded', function () {

    const objeto = {
        email: '',
        asunto: '',
        mensaje: ''
    }

    
    //variables
    const inputEmail    = document.querySelector('#email')
    const inputAsunto   = document.querySelector('#asunto')
    const inputMensaje  = document.querySelector('#mensaje')
    const formulario    = document.querySelector('#enviar-mail')
    const btnSubmite    = document.querySelector('#enviar') 
    const btnReset      = document.querySelector('#resetBtn') 
    const spinner       = document.querySelector('#spinner')
    console.log(spinner);

    //eventos
    inputEmail.addEventListener('input', validarInput )
    
    inputAsunto.addEventListener('input', validarInput )

    inputMensaje.addEventListener('input', validarInput );

    btnReset.addEventListener('input', function(e) {
        
        e.preventDefault()
        formulario.reset();
    });

    formulario.addEventListener('submit', enviarEmail);

    function enviarEmail(e){
        e.preventDefault();
        spinner.classList.add('flex')
        spinner.classList.remove('hidden')
    }

    function validarInput(e){
       
       if(e.target.value === ''){
        mostrarAlerta(`campo ${e.target.id} incompleto`, e.target.parentElement)
        objeto[e.target.id] = '';
        copmprobarEmail()
        return
       } 

      
       if(e.target.id ==='email' && validarEmail(e.target.value)){
        
        mostrarAlerta('El email no es valido', e.target.parentElement)
        objeto[e.target.id] = '';
        copmprobarEmail()
        
        return;
       }
       limpiarAlerta(e.target.parentElement)
    
        //asignar valores
       objeto[e.target.id] = e.target.value.trim().toLowerCase()
     

       //funcion comprobar email
       copmprobarEmail()
    }
    
    function mostrarAlerta( mensaje, referencia ){
        
        limpiarAlerta(referencia)

        //genero elemento html
        const error = document.createElement('p')
        error.textContent = mensaje
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center')
        
        //inyeccion de html
        referencia.appendChild(error)

    }

    function limpiarAlerta(referencia){ 

        const alerta = referencia.querySelector('.bg-red-600')
        
        if(alerta){
            alerta.remove()
        }
    }
    
    function validarEmail (email) {

        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        const resultado = regex.test(email)
       
      return 
    } 

    function copmprobarEmail(){ 
       
        if(Object.values(objeto).includes('')){

        }else {
        btnSubmite.classList.remove('opacity-50')
        btnSubmite.disabled = false;
        }
    }
})