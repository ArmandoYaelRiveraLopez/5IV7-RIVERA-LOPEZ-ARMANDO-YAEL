//vamos a crear una funcion que se encargue del cifrado de cesar
//let
var cesar = cesar || (function(){
    //funcion anonima :3
    //callback

    var doStaff = function(txt, a, b, action){
        var replace = (function(){
            //mi abecedario

            const abc = ['a'/*00*/, 'b'/*01*/, 'c'/*02*/, 'd'/*03*/, 'e'/*04*/,
                        'f'/*05*/, 'g'/*06*/, 'h'/*07*/, 'i'/*08*/, 'j'/*09*/,
                       'k'/*10*/, 'l'/*11*/, 'm'/*12*/, 'n'/*13*/, 'ñ'/*14*/,
                      'o'/*15*/, 'p'/*16*/, 'q'/*17*/, 'r'/*18*/, 's'/*19*/,
                     't'/*20*/, 'u'/*21*/, 'v'/*22*/, 'w'/*23*/, 'x'/*24*/,
                    'y'/*25*/, 'z'/*26*/];


            const l = abc.length;

            //aX+b mod 27 cesarPlusUtra (mejorado)

            




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
