// jquery script

$( function() {
    var dateFormat = "mm/dd/yy",
      from = $( "#from" )
        .datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 3
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( "#to" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 3
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });
 
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
 
      return date;
    }
  } );



//   javascript script

function dateInterval(){
    // get the element id
    const fromInput = document.getElementById("from").value;
    const toInput = document.getElementById("to").value;

    const fromDate =new Date(fromInput);
    const toDate = new Date(toInput);

    // Calculate the year difference
    const yearDiff = toDate.getFullYear() - fromDate.getFullYear();

     // Calculate the total month differnce
    const monthDiff = toDate.getMonth() - fromDate.getMonth();
    const totalMonthDiff = yearDiff * 12 + monthDiff

    // Calculate the time difference in milliseconds
    const timeDiff = toDate.getTime()-fromDate.getTime();

    // Calculate the weeks
    const weeksDiff = Math.ceil(timeDiff / (1000 * 3600 * 24 * 7));

    // Calculate the days difference
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    // display output
    const result = document.getElementById("result");
    result.innerHTML = "Date interval Between " + "<br>"
                        +fromDate + " and " +"<br>" +toDate + "<br>"+"<hr>"+
                        "In year : "+yearDiff+"<br>"+
                        "In month : "+totalMonthDiff+"<br>"+
                        "In week : "+weeksDiff+ "<br>"+
                        "In days : " + daysDiff ;
}