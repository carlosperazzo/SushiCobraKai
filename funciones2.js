function vaciarPedido()
{
  document.getElementById("myPedido").style.display="none"
  
  document.getElementById("total").innerHTML="";
  document.getElementById("totalPedido").innerHTML="0";
  document.getElementById("carritoTable").innerHTML="";
  document.getElementById("carrito-contador").innerHTML="";
  document.getElementById("btnEnviarPedido").style.display="none";
  ocultarTotalVacioIndex(0);
    //window.SubmitEvent();
}

function ocultarTotalVacioIndex()
    {
    var x=document.getElementById("total");
    var total = x.innerHTML;
    var btnVerPedido=document.getElementById("btnVerPedido") ;   
    var btnVerPedidoBarra=document.getElementById("btnVerPedidoBarra") ;
    var contador=document.getElementById("carrito-contador"); 

    total = (total == null || total == undefined || total == "") ? 0 : total;


      if (total==parseInt(0))
      {
        x.style.display = "none";
        contador.style.display="none";
        btnVerPedido.style.display="none";
        btnVerPedidoBarra.disabled=true;
        btnVerPedidoBarra.value="Sin Pedido"
      }
      else{
        x.style.display = "yes";
        contador.style.display="yes";
        btnVerPedido.style.display="yes";
        btnVerPedidoBarra.disabled=false;
        btnVerPedidoBarra.value="Ver mi Pedido"
      }
      

    }

function cargarHTML(link){
           
        var iframe = document.getElementById("productos");
        iframe.style.border="0px solid";
        iframe.width="100%";
        iframe.setAttribute("src", link);
        ocultarTotalVacioIndex();
        
        }     
        
function guardarCantAnt(e)
        {
            
            document.getElementById('ultCantAnt').value = e.value;
            
        }
        
function actualizarCantidadCarrito(e , precio)
        {
         
          let total = document.getElementById('total').innerHTML.replace("$","");
          let cantAnt=document.getElementById('ultCantAnt').value
          let cont=document.getElementById("carrito-contador").innerHTML;  
          let ultItem= e.id ;
          let ultSubTotal=ultItem.replace("Select","SubTot")

         

          ultItem = (ultItem == null || ultItem == undefined || ultItem == "") ? 0 : ultItem;
          total = (total == null || total == undefined || total == "") ? 0 : total;
          cantAnt = (cantAnt == null || cantAnt == undefined || cantAnt == "") ? 0 : cantAnt;
          cont = (cont == null || cont == undefined || cont == "") ? 0 : cont;
          cont=cont-cantAnt
          cont=cont + parseInt(e.value);
          total=total-(cantAnt * precio)
          total = total + parseInt(precio) * parseInt(e.value);
          total = "$"+total 
          document.getElementById('total').innerHTML = total;
          document.getElementById('totalPedido').innerHTML = total;
          document.getElementById("carrito-contador").innerHTML=cont;
          
          document.getElementById(ultSubTotal ).innerHTML= "$" +(parseInt(precio) * parseInt(e.value));
        }

           
        
       function AgregarCarrito(cantidad, titulo, precio, subTotal)
       {
         
           window.parent.document.getElementById('cantidad2').value= cantidad;
           window.parent.document.getElementById('titulo2').value= titulo;
           window.parent.document.getElementById('precio2').value= precio;
           window.parent.document.getElementById('subTotal2').value= subTotal;
           ocultarTotalVacio('10');

           window.parent.document.querySelector('btnAgregar').click();
       }

       function ocultarTotalVacio(valor)
        {
            var x=window.parent.document.getElementById("total");
            var contador=window.parent.document.getElementById("carrito-contador"); 
            var btnVerPedido=window.parent.document.getElementById("btnVerPedido") ; 
            let btnVerPedidoBarra=window.parent.document.getElementById("btnVerPedidoBarra") ;
            valor = (valor == null || valor == undefined || valor == "") ? 0 : valor;
            if (valor==parseInt(0))
            {
                x.style.display = "none";
                contador.style.display = "none";
                btnVerPedido.style.display = "none";
                btnVerPedidoBarra.disabled=true;
                btnVerPedidoBarra.value="Sin Pedido"
            }
            else
            {
                x.style.display = "block";
                contador.style.display = "block";
                btnVerPedido.style.display = "block";
                btnVerPedidoBarra.disabled=false;
                btnVerPedidoBarra.value="Ver mi Pedido"
            }
        }