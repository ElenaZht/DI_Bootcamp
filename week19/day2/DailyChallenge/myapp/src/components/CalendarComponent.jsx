import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {setDay} from '../components/taskSlice'
import { useSelector, useDispatch } from 'react-redux';


export default function CalendarComponent() {
    const dispatch = useDispatch()
    const day = useSelector(state => state.day)

    const handleDayChange = (newDay) => {
        dispatch(setDay(newDay.toDateString()));
    }

  return (
    <div className='plannerContainer'>
        <Calendar onChange={handleDayChange} value={new Date()}/>
    </div>
  )
}
