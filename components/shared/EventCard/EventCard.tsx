import React from 'react'
import Image from 'next/image'
import {
  EventContent,
  EventMainContent,
  EventImageContent,
  EventInfoContent,
  EventDateContent,
  EventTitleContent,
  EventDescriptionContent,
  EventStateContent,
  EventState,
  EventTeamMatesContent,
  AttendingContent,
  EventDotIcon
} from './event-card.styles'
import { EventDataType } from '../../../types/index'
import { AttendingComponent } from '../Attending/Attending'
import { AvatarGroup } from '../AvatarGroup/AvatarGroup'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image1 from '/assets/image1.svg'

interface EventCardProps {
  eventData: EventDataType;
}

export const EventCard: React.FC<EventCardProps> = ({eventData}) => {
  return (
    <EventContent>
      <EventMainContent>
        {eventData.image &&
          <EventImageContent>
            <Image
              src={Image1}
              alt=""
              width={169}
              height={104}
            />
          </EventImageContent>
        }
        <EventInfoContent>
          <EventDateContent>{eventData.date}</EventDateContent>
          <EventTitleContent>{eventData.title}</EventTitleContent>
          <EventDescriptionContent>{ eventData.description }</EventDescriptionContent>
          <EventStateContent>
            <EventState>In Person </EventState>
            <EventDotIcon>
              <FontAwesomeIcon icon={faCircle} width={6} color={'#6B7280'} />
            </EventDotIcon>
            {eventData.teamMates &&
              <EventTeamMatesContent>
                {eventData.teamMates}
              </EventTeamMatesContent>
            }
            {eventData.avatars?.length &&
              <AvatarGroup avatarsData={eventData.avatars} />
            }
          </EventStateContent>
        </EventInfoContent>
      </EventMainContent>
      {eventData.attending &&
        <AttendingContent>
          <AttendingComponent />
        </AttendingContent>
      }
    </EventContent>
  )
}
