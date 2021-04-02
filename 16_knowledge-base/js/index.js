
//Селект
const element = document.querySelector('.select');
  const choices = new Choices(element, {
    searchEnabled: false,
    //Убрать сортировку пунктов по алфавиту
    shouldSort: false
});

// Карта
ymaps.ready(init);
function init(){
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты. Порядок по умолчанию: «широта, долгота».     
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [48.864414, 2.351359],
    // Уровень масштабирования. Допустимые значения: от 0 (весь мир) до 19.    
    zoom: 12   
    
  });   

  // Создание геообъекта с типом точка (метка).
var myGeoObject = new ymaps.GeoObject({
  geometry: {
      type: "Point", // тип геометрии - точка
  }
});

//Своя метка
var myPlacemark = new ymaps.Placemark([48.872185, 2.354215], {}, {
  iconLayout: 'default#image',
  iconImageHref: 'img/SubtractMap.svg'
});

// Размещение геообъекта на карте.
myMap.geoObjects.add(myPlacemark);

// Удаление с карты всех ненужных элементов
myMap.controls.remove('largeMapDefaultSet');
myMap.controls.remove('fullscreenControl');
}

//Маскирование формы
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7(999) 999-99-99");

im.mask(selector);

//Валидация формы
new JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30      
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length ===10        
      }
    },
    mail: {
      required: true,
      email: true
    },
  },

  //Сообщения ошибок
  messages: {
    name: {
      required: 'Как вас зовут?'
    },
    tel: {
      required: 'Укажите ваш телефон'
    },
    mail: {
      required: 'Укажите ваш e-mail'
    },
  }
});

