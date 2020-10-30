//vamos a crear una funcion que se encargue del cifrado de cesar
//let
var cesar = cesar || function(txt, a, b, action){
    //funcion anonima :3
    //callback

        var replace = (function(){
            //mi abecedario
          var resultado = 0;
          const abc = [ 'a'/*00*/, 'b'/*01*/, 'c'/*02*/, 'd'/*03*/, 'e'/*04*/,
                       'f'/*05*/, 'g'/*06*/, 'h'/*07*/, 'i'/*08*/, 'j'/*09*/,
                      'k'/*10*/, 'l'/*11*/, 'm'/*12*/, 'n'/*13*/, 'ñ'/*14*/,
                     'o'/*15*/, 'p'/*16*/, 'q'/*17*/, 'r'/*18*/, 's'/*19*/,
                    't'/*20*/, 'u'/*21*/, 'v'/*22*/, 'w'/*23*/, 'x'/*24*/,
                   'y'/*25*/, 'z'/*26*/                                       ];


            const l = abc.length;



/*                         aX+b mod 27

                     cesarPlusUltra (mejorado)
            Donde x refiere a la pocicion de la letra
            en el mensaje original y el resultado refiere
            a la nueva pocicion


                000000000000000000000000000000000
                000000000000000000000000000000000
                00000000000-----------00000000000
                0000000----00000000000----0000000
                00000--0000000000000000000--00000
                0000-0000000000000000----000-0000
                0000-000000000000000--000-00-0000
                0000-00000000000000000---000-0000
                0000-00000000000000000000000-0000
                00000--0000000000000000000--00000
                000000----00000101010----00000000
                0000000000------------00000000000
                000000000000000000000000000000000
                000000000000000000000000000000000


*/



          for (var i = 0; i < txt.length; i++) {

            for (var circ = 0; circ < abc.length; circ++) {

              if( txt[i] == abc[circ]){

                

                console.log(circ);

                break;

              }

            }

          }


          return resultado;

     })();
     return replace;
};

//realizar una funcion que se encargue de codificar y decodificar

function codificar(){
    //obtener el texto del textarea
    document.getElementById("resultado").innerHTML = cesar( document.getElementById("cadena").value, 3, 4, true);

}

function decodificar(){
    //obtener el texto del textarea
    document.getElementById("resultado").innerHTML = cesar.decode(
        document.getElementById("cadena").value, 3);

}
