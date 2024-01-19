import React, {useState, useEffect} from 'react'
import { NextEventsContainer, EventLabel, NextEventContent } from './next-events.styles'
import { EventCardMobile } from '../shared/EventCardMobile/EventCardMobile'

export const NextEventsComponent = () => {
  const [nextEventsData, setNextEventsData] = useState([]);

  useEffect(() => {
    fetch('api/next_event_data')
      .then((res) => res.json())
      .then((data) => {
        setNextEventsData(data)
      })
  }, [])
  return (
    <NextEventsContainer>
      <EventLabel>Your next events</EventLabel>
      <NextEventContent>
        {nextEventsData.map(( event, index ) => (
          <EventCardMobile key={index} nextEventData={event} />
        ))}
      </NextEventContent>
    </NextEventsContainer>
  )
}
