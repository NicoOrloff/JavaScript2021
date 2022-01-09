//Alertas personalizadas.
  
//Se ejecuta cuando agregamos un producto.
function addAlert(articulo) {
    Swal.fire({
      title: "Agregado!",
      html: `Agregaste el artículo: <strong>${articulo}</strong>`,
      icon: "success",
      confirmButtonText: 'Aceptar',
      customClass: {
        htmlContainer: 'htmlContainer-class'
       },
      confirmButtonColor: 'blue'
     })
  }
      
  //Se ejecuta cuando no hay mas stock.
  function cantAlert() {
    swal.fire({
      title: "No tenemos stock!",
       text: "Por favor, elegí otro producto",
       icon: "error",
       confirmButtonText: 'Aceptar',
       customClass: {
           htmlContainer: 'htmlContainer-class'
       },
      confirmButtonColor: 'blue'
    })
  } 

  function contactAlert() {
    Swal.fire({
      title: "Muchas gracias!",
      text: `Hemos enviado tus datos.`,
      confirmButtonText: 'Aceptar',
      customClass: {
        htmlContainer: 'htmlContainer-class'
    },
      confirmButtonColor: 'blue'
     }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          location.reload()
        )
      }
    })
  }

  function ScrollTop(){
    if (result.isConfirmed){
    document.body.scrollLeft = 0;
    document.body.scrollTop = 0;
    }
else{
    window.pageXOffset = 0;
    window.pageYOffset = 0;
    }
}

  export {
    addAlert, cantAlert, contactAlert
  }