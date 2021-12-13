function mostrar(){
    for (i=0;i<10;i++)
            {
                document.getElementById("tabla").innerHTML +=
                '<tbody><td>'+info_estudiantes[i].id+
                '</td><td>'+info_estudiantes[i].cedula+
                '</td><td>'+info_estudiantes[i].nombre+
                '</td><td>'+info_estudiantes[i].direccion+
                '</td><td>'+info_estudiantes[i].telefono+
                '</td><td>'+info_estudiantes[i].correo+
                '</td><td>'+info_estudiantes[i].curso+
                '</td><td>'+info_estudiantes[i].paralelo+
                '</td></tbody>'

            }
}
