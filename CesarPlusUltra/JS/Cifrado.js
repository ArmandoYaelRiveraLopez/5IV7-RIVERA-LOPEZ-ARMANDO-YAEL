//vamos a crear una funcion que se encargue del cifrado de cesar
//let
var cesar = cesar || (function(){
    //funcion anonima :3
    //callback

    var doStaff = function(txt, a, b, action){
        var replace = (function(){
            //mi abecedario
            var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
                        'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r',
                    's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a'];
            var l = abc.length;

            

    };
})();

//realizar una funcion que se encargue de codificar y decodificar

function codificar(){
    //obtener el texto del textarea
    document.getElementById("resultado").innerHTML = cesar.encode(
        document.getElementById("cadena").value, 3);

}

function decodificar(){
    //obtener el texto del textarea
    document.getElementById("resultado").innerHTML = cesar.decode(
        document.getElementById("cadena").value, 3);

}
