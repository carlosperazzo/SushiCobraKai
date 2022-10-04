       
        function AgregarCarrito(cant, descripcion, precio, padre)
        {
            //Agrega al listado de pedido u producto por cada Sumar
            var total = padre.document.getElementById("total").innerHTML;
            var contador=padre.document.getElementById("carrito-contador").innerHTML; 

            total = (total == null || total == undefined || total == "") ? 0 : total;
            contador = (contador == null || contador == undefined || contador == "") ? 0 : contador;
           
            contador=parseInt(contador) + parseInt(cant)
            padre.document.getElementById("carrito-contador").innerHTML=contador;
            
            total = (parseInt(total) + parseInt(precio));
            padre.document.getElementById('total').innerHTML = total;
            padre.document.getElementById('totalPedido').innerHTML = total;
            ocultarTotalVacio(total)
            
            var Tbl = padre.document.getElementById("carritoTable");
            

            let script="<td><select onclick='guardarCantAnt(this)' onchange='actualizarCantidadCarrito(this,"+  precio +")' style='width: 50px;'>";
            let x=1
        
            while (x<= 10)
            {
                if (x==cant)
                script=script + "<option value='" + x + "'" + " selected=''>"+ x +"</option>"
                else
                script=script + "<option value='" + x + "'" + ">"+ x +"</option>"
                x++
            }             
            script=script + "</select></td><td class='col-descrip'>"+descripcion+"</td>"
            script=script + "<td class='col-precio'>$"+ precio + "</td>"
           
            Tbl.insertRow(-1).innerHTML=script

            
        }

        function ocultarTotalVacio(valor, padre)
        {
            var x=padre.document.getElementById("totalizador");
            var contador=padre.document.getElementById("carrito-contador"); 
            valor = (valor == null || valor == undefined || valor == "") ? 0 : valor;
            if (valor==parseInt(0))
            {
                x.style.display = "none";
                contador.style.display = "none";
            }
            else
            {
                x.style.display = "block";
                contador.style.display = "block";
            }
        }
    