import React, {useState, useEffect} from 'react'
import { TodayContainer, DateLabel, TodayEventContent, Hr } from './today.styles'
import {EventCard} from '../shared/EventCard/EventCard'

export const TodayComponent = () => {
  const [eventDatas, setEventDatas] = useState([]);

  useEffect(() => {
    fetch('api/event_data')
      .then((res) => res.json())
      .then((data) => {
        setEventDatas(data)
      })
  }, [])
  return (
    <TodayContainer>
      <DateLabel>Today, Jan 20</DateLabel>
      <Hr />
      <TodayEventContent>
        {eventDatas.map(( event, index ) => (
          <EventCard key={index} eventData={event}/>
        ))}
      </TodayEventContent>
    </TodayContainer>
  )
}
