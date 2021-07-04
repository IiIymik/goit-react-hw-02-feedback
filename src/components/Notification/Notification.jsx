import React from 'react'
import {Container, Title} from './Notification.styled.js'

function Notification({message}) {
    return (
        <Container>
            <Title>{message}</Title>
        </Container>
    )
}

export default Notification
