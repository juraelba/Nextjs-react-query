import Link from 'next/link'
import React from 'react'
import {
    Container,
    PageContainer,
    MainContainer
} from './home.styles'
import { HeaderComponent } from '../components/Header/Header'
import { TodayComponent } from '../components/Today/Today'
import { NextEventsComponent } from '../components/NextEvents/NextEvents'

const Home = () => {
    return (
        <Container>
            <PageContainer>
                <HeaderComponent />
                <MainContainer>
                    <TodayComponent />
                    <NextEventsComponent />
                </MainContainer>
            </PageContainer>
        </Container>
    )
}

export default Home
