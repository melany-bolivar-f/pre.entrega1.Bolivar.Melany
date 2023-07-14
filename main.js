
let alumno= true


function promedio(){
    while (alumno===true){
        let nombre= prompt("Nombre: ")
        let nota1= parseInt(prompt("Ingrese la primera nota: "))
        let nota2= parseInt(prompt("Ingrese la segunda nota: "))
        let nota3= parseInt(prompt("Ingrese la tercera nota: "))
        let resultado= (nota1 + nota2 + nota3)/3
        alert("el promedio de "+ nombre + " es "+ resultado)

        if (resultado<=5){
            console.log(nombre +" esta desaprobad@")
        }else if (resultado>=6 && resultado<7){
            console.log(nombre +" requiere otro examen")
        }else if (resultado>=8){
            console.log(nombre +" esta aprobad@")
        }
        alumno=confirm("desea saber el promedio de otroalumno? ")
    }
}

promedio()