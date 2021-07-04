import React from 'react'
import { Title, Container } from './Section.styled.js';

function Section({title, children}) {
    return <Container>
            <Title>{title}</Title>
            {children}
        </Container>
           
    
}

export default Section
