ymaps.ready(init);

var placemarks = [
    {
        latitude: 59.97,
        longitude: 30.31,
        hintContent: '<div class="map__hint">ул. Литерторов, д. 19</div>',
        balloonContent: [
          '<div class="map__balloon">',
          '<img class="map__burger-img" src="images/slider1.png" alt="батончики">',
          'Самые вкусные батончики тут! Заходите по адресу: ул. Литерторов, д. 19',
          '</div>'
      ]
    },
    {
        latitude: 59.94,
        longitude: 30.25,
        hintContent: '<div class="map__hint">Малый проспект ВО, д.64</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__burger-img" src="images/slider1.png" alt="батончики">',
            'Самые вкусные батончики тут! Заходите по адресу: Малый проспект ВО, д.64',
            '</div>'
      ]
    },
    {
          latitude: 59.93,
          longitude: 30.34,
          hintContent: '<div class="map__hint">Наб. реки Фонтанки, дю 56</div>',
          balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__burger-img" src="images/slider1.png" alt="батончики">',
            'Самые вкусные батончики тут! Заходите по адресу: Наб. реки Фонтанки, дю 56',
            '</div>'
      ]
    },
        {
        latitude: 59.92,
        longitude: 30.49,
        hintContent: '<div class="map__hint">просп. Солидарности, 11, корп. 2</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__burger-img" src="images/slider1.png" alt="батончики">',
            'Самые вкусные батончики тут! Заходите по адресу: просп. Солидарности, 11, корп. 2',
            '</div>'
      ]
    }
],
geoObjects = [];

function init() {
  var map = new ymaps.Map('map', {
      center: [59.94, 30.32],
      zoom: 12,
      controls: ['zoomControl'],
      behaviors: ['drag']
  });

  for (var i = 0; i < placemarks.length; i++) {
    geoObjects[i] = new ymaps.Placemark ([placemarks[i].latitude, placemarks[i].longitude], {
       hintContent: placemarks[i].hintContent,
       balloonContent: placemarks[i].balloonContent.join('')
    },
    {
      iconLayout: 'default#image',
      iconImageHref: 'images/icons/marker.svg',
      iconImageSize: [46,57],
      iconImageOffset: [-10,-57]
    });
  }

  var clusterer = new ymaps.Clusterer ({
      clusterIcons: [
        {
           href: 'images/icons/marker.svg',
           size: [100,100],
           offset: [-50,-50]
        }
      ],
      clusterIconContentLayout: null
  });

   map.geoObjects.add(clusterer);
  // map.geoObjects.add(placemark);
  clusterer.add(geoObjects);
}
