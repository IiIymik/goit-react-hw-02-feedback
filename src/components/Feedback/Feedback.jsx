import React, { Component } from 'react';
import { Title, Button, TitleList, List, Item } from './Feedback.styled'


export class Feedback extends Component {
    static defaultProps = {
        initialValue: 0,
    }
    static propTypes = {
        // 
    }
    state = {
        good: this.props.initialValue,
        neutral: this.props.initialValue,
        bad: this.props.initialValue,
        total: this.props.initialValue,
        positivePercentage: this.props.initialValue,
    }
    incrementStatistics = (e) => {
        const { name } = e.target;
        this.setState((prevState) => ({
            [name]: prevState[name] + 1,
        }));

        this.countTotalFeedback();
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        const totalCommit = good + neutral + bad;
        // 
    }
    countPositiveFeedbackPercentage() {
        // 
    }
    render() {
        const { good, neutral, bad, total, positivePercentage, } = this.state;
        this.countTotalFeedback()
        // const positive = Math.round(good / total * 100);
        // console.log(totalCommit)
        return (
            <div>
                <Title>Please leave feedback</Title>
                <Button name="good" onClick={this.incrementStatistics}>Good</Button>
                <Button name="neutral" onClick={this.incrementStatistics}>Neutral</Button>
                <Button name="bad" onClick={this.incrementStatistics}>Bad</Button>
                <TitleList>Statistics</TitleList>
                <List>
                    <Item>Good: {good}</Item>
                    <Item>Neutral: {neutral}</Item>
                    <Item>Bad: {bad}</Item>
                    <Item>Total: {total}</Item>
                    <Item>Positive feedback: {positivePercentage}%</Item>
                </List>
            </div>
        )
    }
}

export default Feedback

