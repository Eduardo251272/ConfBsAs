function calculo()
{
    var cant=document.getElementById("valor1").value;
    var seleccion=document.getElementById("valor2");
    var cat=seleccion.options[seleccion.selectedIndex].value;
    var subtotal=0;
    var desc=0;
    var span=document.getElementById("valor3");

    switch (cat=parseInt(cat)){
        case 1:
            desc=200*.20;
            break;
        case 2:
            desc=200*.5;
            break;
        case 3:
            desc=200*.85;
            break;
    }

    subtotal = parseInt(cant)*desc;
    span.textContent = "Total a pagar: $ " + subtotal;
return;
}

function borrar()
{
    document.getElementById("valor1").value=1;
    document.getElementById("valor2").value=1;
    document.getElementById("valor3").value=0;
    var span=document.getElementById("valor3");
    span.textContent = "Total a pagar: $ ";
return;
}