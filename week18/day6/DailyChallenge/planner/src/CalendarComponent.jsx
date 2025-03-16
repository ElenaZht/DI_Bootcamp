import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useDispatch, useSelector } from 'react-redux';


export default function CalendarComponent() {
  const dispatch = useDispatch();
  const curDay = useSelector(state => state.currentDay)


  const handleDateChange = (date) => {
    dispatch({ type: "SET_CURRENT_DAY", payload: date.toDateString() });
  };

  return (
    <div className='calendarContainer'>
      <Calendar onChange={handleDateChange} value={curDay} />
    </div>
  )
}
