var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [51.0906, 71.4111], // Nur-Sultan
        //51.0906° N, 71.4111° E
        zoom: 15
    }, {
        searchControlProvider: 'yandex#search'
    });

}