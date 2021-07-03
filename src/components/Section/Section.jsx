import React from 'react'
import { Title } from './Section.styled.js';

function Section({title, children}) {
    return <div>
            <Title>{title}</Title>
            {children}
        </div>
           
    
}

export default Section
