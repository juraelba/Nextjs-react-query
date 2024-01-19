import React from 'react'
import {
    HeadContainer,
    PageTitle,
    MeetUpContent,
    StyledButton,
    SelectGroupContent,
    CheckButtonGroup
} from './header.styles'
import { CheckButton } from '../shared/CheckButton/CheckButton'
import { Select } from '../shared/Select/Select'

export const HeaderComponent = () => {
  const dates = ['Dates', 'Days']
  const workplaces = ['Workplaces', 'Offices']
  return (
    <HeadContainer>
      <PageTitle>Events</PageTitle>
      <MeetUpContent>
        <SelectGroupContent>
          <Select options={dates} width={169}/>
          <Select options={workplaces} width={291}/>
        </SelectGroupContent>
        <StyledButton>Create Meetup!</StyledButton>
      </MeetUpContent>
      <CheckButtonGroup>
        <CheckButton label={'Events'} checked={true} />
        <CheckButton label={'Meetups'} checked={false} />
        <CheckButton label={'Online'} checked={true} />
        <CheckButton label={'In Person'} checked={true} />
      </CheckButtonGroup>
    </HeadContainer>
  )
}