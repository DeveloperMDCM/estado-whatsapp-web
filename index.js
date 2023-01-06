const button = document.querySelector('#emoticones');
let fondos = document.querySelector('#fondos');
let letras = document.querySelector('#letras');
let contenedor = document.querySelector('.container');
let texto = document.querySelector('#texto');
const picker = new EmojiButton();
var contadorColor = 0;

button.addEventListener('click', () => {
  picker.togglePicker(button);
});
  picker.on('emoji', emoji => {
    texto.value += emoji;
  });

  //Cambiar fondo del contenedor
  const CambiarFondo=()=>
  {
    let colorFondos = ["#263741","#7acaa5","#6e257e","#5697ff","#7e90a4","#57c9ff","#c69fcc","#b6b326","#ad8774","#792139","#c1a03f","#8fa842","#a52c71"]; 
   let colores = colorFondos[Math.floor(Math.random()*colorFondos.length)];
   contenedor.style.background =  colores  ;  
  }
  //Cambiar el estilo de la fuente
  const CambiarFuente=()=>
  {
    let EstilosrLetra = ["Updock","Titan One","Indie Flower","Permanent Marker","Tapestry, cursive","Water Brush","Zen Loop, cursive"]; 

    if(contadorColor===0)
    {
      contadorColor=1;
      texto.style.fontFamily  =  EstilosrLetra[contadorColor];
      letras.style.fontFamily  =  EstilosrLetra[contadorColor];
    }
   
    else if(contadorColor <=4){
      contadorColor++;
      texto.style.fontFamily  =  EstilosrLetra[contadorColor];
      letras.style.fontFamily  =  EstilosrLetra[contadorColor];
    }else{
      contadorColor =1;
      texto.style.fontFamily  =  EstilosrLetra[contadorColor];
      letras.style.fontFamily  =  EstilosrLetra[contadorColor];


    }
  }
  CambiarFondo();

 

