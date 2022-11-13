// ENTREGABLE 02
// Marcos Giraudo 

var Menu = ` `;
let contador= 1;
var Materiales = [];
var Resultados = [];

class Material 
    {
        constructor (nombre, resistividad, largo, seccion)
        {
            this.nombre = nombre;
            this.resistividad = resistividad;
            this.largo = largo;
            this.seccion = seccion;
        }
    }

function Calculo_Resistencia (resistividad,largo,seccion)
{
    return (resistividad*largo)/seccion;
}


Menu = prompt("¡¡Bienvenido al calculador de Resistencia de Materiales!!\nPresione cualquier tecla para continuar o \"S\" para salir")
    
while (Menu != `S` && Menu != `s`)
    {
        const nombre = prompt(`Ingrese el Nombre del Material N°${contador}: `);
        const resistividad = parseFloat(prompt(`Ingrese el coef. de resistividad del Material N°${contador} (OHM x m): `));
        const largo = parseFloat(prompt(`Ingrese el Nombre el largo del Material N°${contador} (m): `));
        const seccion = parseFloat(prompt(`Ingrese la sección del Material N°${contador} (m2): `));

        Materiales.push(new Material (nombre,resistividad,largo,seccion));

        const resistencia = Calculo_Resistencia(resistividad,largo,seccion);
    
        Resultados.push(resistencia);

        while (Menu != `S` && Menu != `s` && Menu != "1")
            {
                Menu = prompt("¿Desea cargar otro Material?\n\"1\" - Seguir\n\"s\"- Salir");
            }
     
        if (Menu == "1")
            {
                contador = contador + 1;
                Menu = " ";
            }
    }

Materiales.forEach((Materiales,indice) => 
    {
     alert(`RESULTADOS\nNombre del Material N${indice+1} : \"${Materiales.nombre}\" \nResistencia= ${Resultados[indice]}`);
    }
                 );
alert ("¡ADIOS!");
