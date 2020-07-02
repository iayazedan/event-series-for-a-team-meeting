function myFunction() {
  // Creates an event series for a team meeting, taking place every Tuesday and Thursday in 2013.
var eventSeries = CalendarApp.getDefaultCalendar().createEventSeries('Team Meeting',
    new Date('June 1, 2020 03:00:00 PM EST'),
    new Date('June 1, 2020 04:00:00 PM EST'),
    CalendarApp.newRecurrence().addWeeklyRule()
        .onlyOnWeekdays([CalendarApp.Weekday.TUESDAY, CalendarApp.Weekday.THURSDAY])
        .until(new Date('January 1, 2014')));
Logger.log('Event Series ID: ' + eventSeries.getId());
}