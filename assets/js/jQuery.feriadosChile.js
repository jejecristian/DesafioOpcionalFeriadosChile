// Funcion jQuery que permite obtener feriados de chile del 2020
jQuery.fn.feriadosChile = function(){
    $.ajax({
      type: "GET",
      url: "https://api.victorsanmartin.com/feriados/en.json",
      dataType: "json",
      success: function(data){
          let tabla = '';
          for (feriado of data.data){
            tabla += '<tr>'+
                          '<td>' + feriado.date + '</td>' +
                          '<td>' + feriado.title + '</td>' +
                          '<td>' + feriado.extra + '</td>' +
                     '</tr>';
          }
          $('#cuerpo').html(tabla);
      },
      error: function(data){
        alert("Error: no se logró establecer la conexión con la API");
        console.error("Error: no se logró establecer la conexión con la API");
      },
      async: true
    });
    return this;
  };
