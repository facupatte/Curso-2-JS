//Simulador , tienda de guitarras


let total=0;
let electrica = 500;
let electroAcustica = 300;
let acustica = 100;


const descuentoDel10 = 0.1;

function descuento (valorTotal){
    if(total>=600){
        alert("Felicitaciones!!\nCompra mayor a USD 600, tienes un descuento del 10% sobre el total");
        return true;
    }else{
        return false;
    }}

let tipoDeGuitarra = prompt("*****Bienvenid@s a GUITARR PALACE*****\n¿QUE ESTÁS BUSCANDO?\nPresiona según tus intereses:\n1- Guitarra Eléctrica USD 500 \n2- Guitarra Electroacústica USD 300 \n3- Guitarra Acústica USD 100 \nf- Para Salir");

while (tipoDeGuitarra!="f"){
    switch (tipoDeGuitarra){
        case "1":
            total=total+electrica;
            alert("Se agregó Guitarra Eléctrica por valor USD "+electrica+", el total es: USD "+total);
            break;
        case "2":
            total=total+electroAcustica;
            alert("Se agregó Guitarra Electroacústica por valor USD "+electroAcustica+", el total es: USD "+total);
            break;
        case "3":
            total=total+acustica;
            alert("Se agregó Guitarra Acustica por valor USD "+acustica+", el total es: USD "+total);
            break;
        default:
            alert("No Válido");
            break;
    }

    tipoDeGuitarra = prompt("*****Bienvenid@s a GUITARR PALACE*****\n¿QUE ESTÁS BUSCANDO?\nPresiona según tus intereses:\n1- Guitarra Eléctrica USD 500 \n2- Guitarra Electroacústica USD 300 \n3- Guitarra Acústica USD 100 \n0- Para Salir");
    }
    
    if (descuento() == true){
        total = total - total*descuentoDel10
    }else{total = total}
    
    
    alert("Monto a Pagar: USD "+total);