import React from 'react';

import { Button, Container } from './FeedbackOptions.styled.js';
import Section from '../Section/Section.jsx';

function FeedbackOptions(props) {
    const { onLeaveFeedback } = props;
    return <Section title="Please leave feedback">
        <Container>
             <Button name="good" onClick={onLeaveFeedback}>Good</Button>
                <Button name="neutral" onClick={onLeaveFeedback}>Neutral</Button>
                <Button name="bad" onClick={onLeaveFeedback}>Bad</Button>
        </Container>
    </Section>
}

export default FeedbackOptions

