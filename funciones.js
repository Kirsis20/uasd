/* ValidaCedula::
 
 Con esta funcion se valida si una cedula es correcta, tiene como
 parametro una cedula, se puede enviar con y sin guiones y devuleve un true si es valida, de lo contrario false
 
 */
function ValidaCedula(ced) 
{
        var status = false;
        var c = ced.replace(/-/g, '');
        var Cedula = c.substr(0, c.length - 1);
        var Verificador = c.substr(c.length - 1, 1);
        var suma = 0;
        if (ced.length < 11) {
            return status;
        }
        for (i = 0; i < Cedula.length; i++) {
            mod = "";
            if ((i % 2) == 0) { mod = 1 } else { mod = 2 }
            res = Cedula.substr(i, 1) * mod;
            if (res > 9) {
                res = res.toString();
                uno = res.substr(0, 1);
                dos = res.substr(1, 1);
                res = eval(uno) + eval(dos);
            }
            suma += eval(res);
        }
        el_numero = (10 - (suma % 10)) % 10;
        if (el_numero == Verificador && Cedula.substr(0, 3) != "000") {
            status = true
        }
        else {
            status = false
        }

        return status;
}



/* mensaje::
 
 Con esta funcion se despliega un mensaje tipo modal, como parametro recive un string que es el mensaje a mostrar
 
 */
function mensaje(texto) {
    $("#modaltitulo,#modalcuerpo").empty();
    $("#modalcuerpo").append(texto);
    $("#modalmensaje").modal({show:true});
}


function loadinga() {
    $('body').loadingModal({ text: 'Universidad Aut&oacute;noma de Santo Domingo' });
}


function loadingc() {
    $('body').loadingModal('destroy');
}



/* isMail::
 
Con esta funcion se valida si un correo es valido o no, tiene como parametro el string del correo y devuelve un tru si el correo es valido, 
de lo contrario devuelve false
 
 */

function isMail(email) {

    var Cadena = email;

    Punto = Cadena.substring(Cadena.lastIndexOf('.') + 1, Cadena.length);           // Cadena del .com
    Dominio = Cadena.substring(Cadena.lastIndexOf('@') + 1, Cadena.lastIndexOf('.'));   // Dominio @lala.com
    Usuario = Cadena.substring(0, Cadena.lastIndexOf('@'));                 // Cadena lalala@
    Reserv = "@/º\"\'+*{}\\<>?¿[]áéíóú#·¡!^*;,:";                       // Letras Reservadas

    // Añadida por El Codigo para poder emitir un alert en funcion de si email valido o no
    valido = true;

    // verifica qie el Usuario no tenga un caracter especial
    for (var Cont = 0; Cont < Usuario.length; Cont++) {
        X = Usuario.substring(Cont, Cont + 1);
        if (Reserv.indexOf(X) != -1)
            valido = false;
    }

    // verifica qie el Punto no tenga un caracter especial
    for (var Cont = 0; Cont < Punto.length; Cont++) {
        X = Punto.substring(Cont, Cont + 1);
        if (Reserv.indexOf(X) != -1)
            valido = false;
    }

    // verifica qie el Dominio no tenga un caracter especial
    for (var Cont = 0; Cont < Dominio.length; Cont++) {
        X = Dominio.substring(Cont, Cont + 1);
        if (Reserv.indexOf(X) != -1)
            valido = false;
    }

    // Verifica la sintaxis básica.....
    if (Punto.length < 2 || Dominio < 1 || Cadena.lastIndexOf('.') < 0 || Cadena.lastIndexOf('@') < 0 || Usuario < 1) {
        valido = false;
    }

    // Añadido por El Código para que emita un alert de aviso indicando si email válido o no
    if (valido) {
        //alert('Email válido.')
        return true;    //cambiar por return true para hacer el submit del formulario en caso de validacion correcta
    } else {

        return false;
    }
}



/* isMail::
 
Con esta funcion se valida si un correo es valido o no, tiene como parametro el string del correo y devuelve un tru si el correo es valido, 
de lo contrario devuelve false
 
 */

function isMail(email) {
        var Cadena = email;

        Punto = Cadena.substring(Cadena.lastIndexOf('.') + 1, Cadena.length);           // Cadena del .com
        Dominio = Cadena.substring(Cadena.lastIndexOf('@') + 1, Cadena.lastIndexOf('.'));   // Dominio @lala.com
        Usuario = Cadena.substring(0, Cadena.lastIndexOf('@'));                 // Cadena lalala@
        Reserv = "@/º\"\'+*{}\\<>?¿[]áéíóú#·¡!^*;,:";                       // Letras Reservadas

        // Añadida por El Codigo para poder emitir un alert en funcion de si email valido o no
        valido = true;

       

        // verifica qie el Usuario no tenga un caracter especial
        for (var Cont = 0; Cont < Usuario.length; Cont++) {
            X = Usuario.substring(Cont, Cont + 1);
            if (Reserv.indexOf(X) != -1)
                valido = false;
        }

        // verifica qie el Punto no tenga un caracter especial
        for (var Cont = 0; Cont < Punto.length; Cont++) {
            X = Punto.substring(Cont, Cont + 1);
            if (Reserv.indexOf(X) != -1)
                valido = false;
        }

        // verifica qie el Dominio no tenga un caracter especial
        for (var Cont = 0; Cont < Dominio.length; Cont++) {
            X = Dominio.substring(Cont, Cont + 1);
            if (Reserv.indexOf(X) != -1)
                valido = false;
        }

        // Verifica la sintaxis básica.....
        if (Punto.length < 2 || Dominio < 1 || Cadena.lastIndexOf('.') < 0 || Cadena.lastIndexOf('@') < 0 || Usuario < 1) {
            valido = false;
        }


        // Añadido por El Código para que emita un alert de aviso indicando si email válido o no
        if (valido) {
            //alert('Email válido.')
            return true;    //cambiar por return true para hacer el submit del formulario en caso de validacion correcta
        } else {

            return false;
        }
    }

/* formato_numero::
 
Con esta funcion se devuelve un strign del numero formateado con la separacion por comas y dos puntos decimales
 
 */

function formato_numero(numero, decimales, separador_decimal, separador_miles) { // v2007-08-06
    var decimales = 2;
    var separador_decimal = ".";
    var separador_miles = ','
    numero = parseFloat(numero);
    if (isNaN(numero)) {
        return "";
    }

    if (decimales !== undefined) {
        // Redondeamos
        numero = numero.toFixed(decimales);
    }

    // Convertimos el punto en separador_decimal
    numero = numero.toString().replace(".", separador_decimal !== undefined ? separador_decimal : ",");

    if (separador_miles) {
        // Añadimos los separadores de miles
        var miles = new RegExp("(-?[0-9]+)([0-9]{3})");
        while (miles.test(numero)) {
            numero = numero.replace(miles, "$1" + separador_miles + "$2");
        }
    }

    return numero;
}

/* tooltip::
 
Con esta funcion se muestra un tooltips en el evento onmouseover; utiliza el atributo title del objeto seleccinado
 
 */

$(document).ready(function () {
    $(document).uitooltip({
        track: true
    });
});
