import React from 'react'
import { Container } from './Wrapper.styled';
import Feedback from '../Feedback/Feedback';


function Wrapper() {
    return (
        <Container>
            <Feedback initialValue={0}/>
        </Container>
    )
}

export default Wrapper