var container = document.querySelector("[id=yandex-map]");

ymaps.ready(function ()  {
  var myMap = new ymaps.Map(container, {
    center: [59.939239, 30.326853],
    zoom: 16,
    controls: ["zoomControl"]
  });
  myMap.behaviors.disable("scrollZoom");

  myMap.controls.add("zoomControl", {});

  var myPlacemark = new ymaps.Placemark([59.938631, 30.323055] , {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/pin.png",
      iconImageSize: [218, 142],
      iconImageOffset: [-40, -142] });

    myMap.geoObjects.add(myPlacemark);

});
