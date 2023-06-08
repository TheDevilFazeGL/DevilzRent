var data=[
  {date: 'card-notify-year',name:'youngtimers'},
  {date:'2018',name:'date is 14'},
  {date:'02/16/2018',name:'date is 16'},
  {date:'02/20/2018',name:'date is 20'},
  {date:'02/24/2018',name:'date is 24'},
  {date:'02/26/2018',name:'date is 26'},
  {date:'02/30/2018',name:'date is 30'},
  {date:'03/01/2018',name:'date is 01'},
  {date:'03/05/2018',name:'date is 05'},
  {date:'02/23/2018',name:'date is name 23'},
]




  var today            = new Date();
  var todayTime        = new Date().getTime();
  var days_after_20    = new Date().setDate(today.getDate()+20);
  var days_before_5    = new Date().setDate(today.getDate()-5);

  var result = data.filter(function (item) {
     var itemTime = new Date(item.date).getTime()
     return itemTime >= days_before_5 && itemTime <= days_after_20;
  })

console.log(result);