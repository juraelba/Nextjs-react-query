import React from 'react'
import Image from 'next/image'
import {
  EventMobileContent,
  EventInfoContent,
  EventDateContent,
  EventTitleContent,
  EventDescriptionContent,
  EventState
} from './event-card-mobile'
import { EventDataType } from '../../../types/index'
import Image4 from '/assets/image4.svg'

interface NextEventCardProps {
  nextEventData: EventDataType;
}

export const EventCardMobile: React.FC<NextEventCardProps> = ({nextEventData}) => {
  return (
    <EventMobileContent>
      {nextEventData.image &&
        <Image
          src={Image4}
          alt="Picture of the author"
          width={267}
          height={160}
        />
      }
      <EventInfoContent>
        <EventDateContent>{nextEventData.date}</EventDateContent>
        <EventTitleContent>{nextEventData.title}</EventTitleContent>
        <EventDescriptionContent>{ nextEventData.description }</EventDescriptionContent>
        <EventState>In Person</EventState>
      </EventInfoContent>
   </EventMobileContent> 
  )
}
