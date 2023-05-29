document.addEventListener('DOMContentLoaded', function() {
    // Objeto JSON con la información del AWB y las etapas del proceso
    var data = {
      "Airwaybillinfo": {
        "AWBPrefix": "865",
        "AWBNumber": "11504441",
        "Origin": "LAX",
        "Destination": "MEX",
        "Pieces": "10",
        "Weight": "1402",
        "UOM": "kg",
        "milestoneinfo": [
          {
            "code": "BKD",
            "status": "AWB Booked",
            "description": "AWB Booked",
            "Station": "LAX",
            "FlightOrigin": "LAX",
            "flightDestination": "MEX",
            "flightnumber": "M76847",
            "flightdate": "2021-10-22 00:00:00",
            "eventdatetimeinUTC": "2021-10-20T18:15:44",
            "pieces": "10",
            "weight": "1402",
            "UOM": "kg",
            "deliveryinfo": "",
            "remarks": ""
          },
          {
            "code": "FWB",
            "status": "AWB Executed",
            "description": "AWB Executed",
            "Station": "LAX",
            "FlightOrigin": "LAX",
            "flightDestination": "MEX",
            "flightnumber": "M76847",
            "flightdate": "2021-10-22 00:00:00",
            "eventdatetime": "2021-10-21T02:21:02",
            "pieces": "10",
            "weight": "1402",
            "UOM": "kg",
            "deliveryinfo": "",
            "remarks": ""
          },
          {
            "code": "RCS",
            "status": "AWB Accepted",
            "description": "AWB Accepted",
            "Station": "LAX",
            "FlightOrigin": "LAX",
            "flightDestination": "MEX",
            "flightnumber": "M76847",
            "flightdate": "2021-10-22 00:00:00",
            "eventdatetime": "2021-10-21T02:21:02",
            "pieces": "10",
            "weight": "1402",
            "UOM": "kg",
            "deliveryinfo": "",
            "remarks": ""
          },
          {
            "code": "MAN",
            "status": "AWB Manifested",
            "description": "AWB Manifested",
            "Station": "LAX",
            "FlightOrigin": "LAX",
            "flightDestination": "MEX",
            "flightnumber": "M76847",
            "flightdate": "2021-10-22 00:00:00",
            "eventdatetime": "2021-10-22T08:25:23",
            "pieces": "10",
            "weight": "1402",
            "UOM": "kg",
            "deliveryinfo": "",
            "remarks": ""
          },
          {
            "code": "DEP",
            "status": "AWB Departed",
            "description": "AWB Departed",
            "Station": "LAX",
            "FlightOrigin": "LAX",
            "flightDestination": "MEX",
            "flightnumber": "M76847",
            "flightdate": "2021-10-22 00:00:00",
            "eventdatetime": "2021-10-22T09:00:49",
            "pieces": "10",
            "weight": "1402",
            "UOM": "kg",
            "deliveryinfo": "",
            "remarks": ""
          },
          {
            "code": "ARR",
            "status": "AWB Arrived",
            "description": "AWB Arrived",
            "Station": "MEX",
            "FlightOrigin": "LAX",
            "flightDestination": "MEX",
            "flightnumber": "M76847",
            "flightdate": "2021-10-22 00:00:00",
            "eventdatetime": "2021-10-22T18:18:23",
            "pieces": "10",
            "weight": "1402",
            "UOM": "kg",
            "deliveryinfo": "",
            "remarks": ""
          },
          {
            "code": "DLV",
            "status": "AWB Delivered",
            "description": "AWB Delivered",
            "Station": "MEX",
            "FlightOrigin": "LAX",
            "flightDestination": "MEX",
            "flightnumber": "M76847",
            "flightdate": "2021-10-22 00:00:00",
            "eventdatetime": "2021-10-22T19:03:23",
            "pieces": "10",
            "weight": "1402",
            "UOM": "kg",
            "deliveryinfo": "Delivery order number DO-MEX-000047825",
            "remarks": ""
          }
        ]
      }
    };
  // Función para mostrar la información del AWB en la página
  function mostrarInformacionAWB(awbData) {
    // Verificar si el objeto JSON y las propiedades existen
    if (
      awbData &&
      awbData.Airwaybillinfo &&
      awbData.Airwaybillinfo.AWBNumber
    ) {
      var awbNumber = awbData.Airwaybillinfo.AWBNumber;
      var milestoneInfo = awbData.Airwaybillinfo.milestoneinfo;

      // Obtener el elemento donde se mostrará la información del AWB
      var awbInfoContainer = document.getElementById('awb-info');

      // Mostrar el número de AWB
      var awbNumberElement = document.createElement('h2');
      awbNumberElement.textContent = 'Número de AWB: ' + awbNumber;
      awbInfoContainer.appendChild(awbNumberElement);

      // Recorrer las etapas del proceso y mostrar la información
      milestoneInfo.forEach(function(step) {
        var stepInfo = document.createElement('div');
        stepInfo.classList.add('step-info');

        // Mostrar cada propiedad del paso del envío
        for (var key in step) {
          if (step.hasOwnProperty(key)) {
            var propertyElement = document.createElement('p');
            propertyElement.textContent = key + ': ' + step[key];
            stepInfo.appendChild(propertyElement);
          }
        }

        // Agregar el recuadro informativo al contenedor principal
        awbInfoContainer.appendChild(stepInfo);
      });
    } else {
      console.error('El objeto JSON no contiene la estructura esperada.');
    }
  }

  // Llamar a la función para mostrar la información del AWB
  mostrarInformacionAWB(data);
});