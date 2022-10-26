function BuscarTiempo()
{

  var list=document.getElementById("cities");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires,ar&APPID=246a6d3f3ecc1db4ff57f50d8159a9ac&units=metric`;

  fetch(url)
  .then(response => response.json())
  .then(data => {
    const { main, name, sys, weather } = data;
    const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
      weather[0]["icon"]
    }.svg`;
    
    
    const markup = `
      <table width='250px' border='0'><tr><td><span class="city-name" >
        ${name}
      
      </span></td>
      <td><span class="city-temp">${Math.round(main.temp)}<sup>°C</sup></span></td>
      <td><figure>
        <img class="city-icon" src="${icon}" alt="${
      weather[0]["description"]
    }">
        
      </figure></td></tr></table>
    `;
    
    
   
    let CajaTiempo= document.getElementById("CajaTiempo");
    CajaTiempo.innerHTML = markup;
    
  })
  .catch(() => {
    
  });



};

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
          let InputSelect=ultItem.replace("Select","Input")
          
          let antInpuntCant=document.getElementById(InputSelect).value
          
          document.getElementById(InputSelect).value= (e.value);

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

           
        
       function AgregarCarrito(cant, descripcion, precio)
       {
         
           let ultItem=window.parent.document.getElementById('ultItem').value ;
           
           ultItem = (ultItem == null || ultItem == undefined || ultItem == "") ? 0 : ultItem;
           
           //Agrega al listado de pedido u producto por cada Sumar
           var total = window.parent.document.getElementById("total").innerHTML.replace("$","");
           var contador=window.parent.document.getElementById("carrito-contador").innerHTML; 
           let subtotal=0
           total = (total == null || total == undefined || total == "") ? 0 : total;
           contador = (contador == null || contador == undefined || contador == "") ? 0 : contador;
          
           contador=parseInt(contador) + parseInt(cant)
           window.parent.document.getElementById("carrito-contador").innerHTML=contador;
           precio=precio.replace("$","");
           total = "$" +(parseInt(total) + parseFloat(precio));
           subtotal=parseFloat(precio) * parseInt(cant)
           window.parent.document.getElementById('total').innerHTML = total;
           window.parent.document.getElementById('totalPedido').innerHTML = total;
          
           ocultarTotalVacio(total)
           
           var Tbl = window.parent.document.getElementById("carritoTable");
           
           let script=""
           
           if (ultItem==10)
                script="<tr><td>Cant</td><td>Descripción</td><td>Precio</td><td>Total</td></tr>"
           ultItem++
           window.parent.document.getElementById('ultItem').value=ultItem

           
           script=script + "<tr><td><select id='Select" + ultItem + "' onclick='guardarCantAnt(this)' onchange='actualizarCantidadCarrito(this,"+  precio +")' style='width: 50px;'>";
           let x=1
           let script2 ="<td><input type='text' name='#descripcion#' value='#valor#' id='Input"+ultItem+"' style='Display:none'></td>"
           while (x<= 10)
           {
               if (x==cant)
               script=script + "<option value='" + x + "'" + " selected=''>"+ x +"</option>"
               else
               script=script + "<option value='" + x + "'" + ">"+ x +"</option>"
               x++
           }             
           script2 =script2.replace("#descripcion#",descripcion ).replace("#valor#", cant)

           script=script + "</select></td><td class='col-descrip' >"+descripcion+"</td>"
           script=script + "<td class='col-precio'>$"+ precio + "</td>"
           script=script + "<td class='col-precio' id='SubTot" + ultItem + "'>$" + subtotal + "</td>"+script2+"</tr>"
           //script=script + "<td><button onclick='EliminarItem(" +ultItem+")'><img src='imagenes/tachito.svg'></button></td></tr>"
       
           Tbl.insertRow(-1).innerHTML=script

           let PedidoEnviarAnt= window.parent.document.getElementById("PedidoEnviar").value + "<br>";
           PedidoEnviarAnt = (PedidoEnviarAnt == null || PedidoEnviarAnt == undefined ) ? "" : PedidoEnviarAnt;
          
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