El siguiente código JavaScript se encarga de mostrar la información de un AWB (Airway Bill) en una página web. Un AWB es un documento de transporte utilizado en la industria de carga aérea para rastrear y registrar el envío de mercancías. El código utiliza el evento DOMContentLoaded para asegurarse de que el contenido de la página se haya cargado antes de ejecutar el script.

Información del AWB
El objeto JSON data contiene la información del AWB, incluyendo los siguientes detalles:

Prefijo del AWB: 865
Número del AWB: 11504441
Origen: LAX
Destino: MEX
Piezas: 10
Peso: 1402 kg
Además, se especifica un array de etapas del proceso denominado milestoneinfo. Cada etapa del proceso incluye los siguientes campos:

Código: Código de la etapa (por ejemplo, "BKD", "FWB", "RCS").
Estado: Estado de la etapa (por ejemplo, "AWB Booked", "AWB Executed", "AWB Accepted").
Descripción: Descripción de la etapa.
Estación: Estación relacionada con la etapa.
Origen del vuelo: Origen del vuelo asociado a la etapa.
Destino del vuelo: Destino del vuelo asociado a la etapa.
Número de vuelo: Número de vuelo relacionado con la etapa.
Fecha y hora del vuelo: Fecha y hora del vuelo.
Fecha y hora del evento (en UTC): Fecha y hora del evento de la etapa.
Número de piezas: Número de piezas en la etapa.
Peso: Peso en la etapa.
UOM: Unidad de medida del peso.
Información de entrega: Información relacionada con la entrega.
Observaciones: Observaciones adicionales.
Función para mostrar la información del AWB
El código contiene la función mostrarInformacionAWB(awbData) que se encarga de mostrar la información del AWB en la página. La función verifica si el objeto JSON awbData y las propiedades necesarias existen antes de procesar la información.

Dentro de la función, se obtiene el elemento HTML con el id awb-info, donde se mostrará la información del AWB. Luego, se crea un elemento de encabezado h2 para mostrar el número de AWB y se agrega al contenedor.

Después, se recorre el array milestoneinfo que contiene las etapas del proceso del AWB. Por cada etapa, se crea un elemento div para mostrar la información y se le agrega la clase step-info. Luego, se recorren las propiedades de cada etapa y se crea un elemento p para mostrar cada propiedad y su valor. Estos elementos se agregan al elemento div de la etapa.

Finalmente, el elemento div de la etapa se agrega al contenedor principal awbInfoContainer.

Si el objeto JSON awbData o las propiedades requeridas no existen, se muestra un mensaje de error en la consola.

Al final del código, se llama a la función mostrarInformacionAWB(data) pasando el objeto JSON data como argumento, lo que desencadena la visualización de la información del AW
