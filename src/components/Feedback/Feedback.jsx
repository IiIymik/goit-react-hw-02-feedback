import React, { Component } from 'react';
import { Title, Button, TitleList, List, Item } from './Feedback.styled'


export class Feedback extends Component {
    state = {
  good: 0,
  neutral: 0,
  bad: 0
    }
    incrementStatistics(e) {
        this.setState({ good: 1});
        
    }
    render() {
        const { good, neutral, bad } = this.state;
        return (
            <div>
                <Title>Please leave feedback</Title>
                <Button name="good" onClick={this.incrementStatistics}>Good</Button>
                <Button name="neutral">Neutral</Button>
                <Button name="bad">Bad</Button>
                <TitleList>Statistics</TitleList>
                <List>
                    <Item>Good: {good}</Item>
                    <Item>Neutral: {neutral}</Item>
                    <Item>Bad: {bad}</Item>
                </List>
            </div>
        )
    }
}

export default Feedback

