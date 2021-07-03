import React from 'react'
import { Button } from './FeedbackOptions.styled.js';
import Section from '../Section/Section.jsx';
function FeedbackOptions(props) {
    const { onLeaveFeedback } = props;
    return <Section title="Please leave feedback">
        <Button name="good" onClick={onLeaveFeedback}>Good</Button>
                <Button name="neutral" onClick={onLeaveFeedback}>Neutral</Button>
                <Button name="bad" onClick={onLeaveFeedback}>Bad</Button>
    </Section>
}

export default FeedbackOptions
