$(function() {
$( "#range-controls" ).slider({
  range: true,
  min: 0,
  max: 850,
  values: [ 100, 500 ],
  slide: function( event, ui ) {
  //Поле минимального значения
  $( "#min-price" ).val(ui.values[ 0 ]);
  //Поле максимального значения
  $("#max-price").val(ui.values[1]); }
  });
  //Записываем значения ползунков в момент загрузки страницы
  //То есть значения по умолчанию
  $( "#min-price" ).val($("#range-controls" ).slider( "values", 0 ));
  $("#max-price").val($("#range-controls").slider( "values", 1 ));
});
