$(function(){
   var data = [
      { "date": "2021-06-30 10:15:20", "title": "30 июня, 19:30" },
      { "date": "2021-06-28 10:15:20", "title": "28 июня, 19:30" },
      { "date": "2021-06-26 10:15:20", "title": "26 июня, 19:30" },
      { "date": "2021-06-24 10:15:20", "title": "24 июня, 19:30" },
      { "date": "2021-06-22 10:15:20", "title": "22 июня, 19:30" },
      { "date": "2021-06-22 10:15:20", "title": "22 июня, 19:30" },
      { "date": "2021-06-20 10:15:20", "title": "20 июня, 19:30" },
   ];
   $('#eventCalendar').eventCalendar({
      jsonData: data,
      eventsjson: 'data.json',
      jsonDateFormat: 'human',
      startWeekOnMonday: false,
      openEventInNewWindow: true,
      dateFormat: 'DD-MM-YYYY',
      showDescription: false,
      locales: {
         locale: "ru",
         txt_noEvents: "Нет запланированных событий",
         txt_SpecificEvents_prev: "",
         txt_SpecificEvents_after: "события:",
         txt_NextEvents: "Ближайшие мероприятия",
         txt_GoToEventUrl: "Смотреть",
         moment: {
            "months" : [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
            "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
            "monthsShort" : [ "Янв", "Фев", "Мар", "Апр", "Май", "Июн",
            "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек" ],
            "weekdays" : [ "Воскресенье", "Понедельник","Вторник","Среда","Четверг",
            "Пятница","Суббота" ],
            "weekdaysShort" : [ "Вс","Пн","Вт","Ср","Чт",
            "Пт","Сб" ],
            "weekdaysMin" : [ "Вс","Пн","Вт","Ср","Чт",
            "Пт","Сб" ]
         }
      }
   });
});