ymaps.ready(init);

var placemarks = [
    {
        latitude: 59.97,
        longitude: 30.31,
        hintContent: '<div class="map__hit-title">Исаакиевский собор</div>',
        balloonContent: [
          '<div class="map__title">Исаакиевский собор</div>',
          '<div class="map__item">',
            '<div><img src="img/filter/point-map.svg" alt="#"></div>',
            '<div class="map__subtitle"> Санкт-Петербург, Исаакиевская площадь, 4 </div>',
          '</div>',
          '<div class="map__foto">',
            '<img class="map__img" src="img/foto-pages/map-1.png" alt="#">',
          '</div>',
          '</div>'
        ]
    },
    {
        latitude: 59.94,
        longitude: 30.25,
        hintContent: '<div class="map__hit-title">Исаакиевский собор</div>',
        balloonContent: [
          '<div class="map__title">Исаакиевский собор</div>',
          '<div class="map__item">',
            '<div><img src="img/filter/point-map.svg" alt="#"></div>',
            '<div class="map__subtitle"> Санкт-Петербург, Исаакиевская площадь, 4 </div>',
          '</div>',
          '<div class="map__foto">',
            '<img class="map__img" src="img/foto-pages/map-1.png" alt="#">',
          '</div>',
          '</div>'
        ]
    },
    {
        latitude: 59.93,
        longitude: 30.34,
        hintContent: '<div class="map__hit-title">Исаакиевский собор</div>',
        balloonContent: [
          '<div class="map__title">Исаакиевский собор</div>',
          '<div class="map__item">',
            '<div><img src="img/filter/point-map.svg" alt="#"></div>',
            '<div class="map__subtitle"> Санкт-Петербург, Исаакиевская площадь, 4 </div>',
          '</div>',
          '<div class="map__foto">',
            '<img class="map__img" class="map__img" src="img/foto-pages/map-1.png" alt="#">',,
          '</div>',
          '</div>'
        ]
    }
],
    geoObjects= [];

function init() {
    var map = new ymaps.Map('map', {
        center: [59.94, 30.32],
        zoom: 13,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    for (var i = 0; i < placemarks.length; i++) {
            geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
            {
                hintContent: placemarks[i].hintContent,
                balloonContent: placemarks[i].balloonContent.join('')
            },
            {
                iconLayout: 'default#image',
                iconImageHref: 'img/filter/mark.svg',
                iconImageSize: [30, 33],
                iconImageOffset: [-30, -33]
            });
    }

    var clusterer = new ymaps.Clusterer({
        clusterIcons: [
            {
                href: 'img/filter/mark.svg',
                size: [30, 33],
                offset: [-30, -33]
            }
        ],
        clusterIconContentLayout: null
    });

    map.geoObjects.add(clusterer);
    clusterer.add(geoObjects);

    $('.map__foto').click(function(){
      alert('sa')
    })
}