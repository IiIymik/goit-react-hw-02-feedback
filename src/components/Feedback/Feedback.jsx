import React, { Component } from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';

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
        visible: false,
    }
    
    incrementStatistics = (e) => {
        const { name } = e.target;
        this.setState((prevState) => ({
            [name]: prevState[name] + 1,
        }));
        this.changeVisible();
    }

    changeVisible = () => {
        this.setState({visible: true})
    }
  
    render() {
        const { good, neutral, bad, visible} = this.state;
        const totalSum = good + bad + neutral;
        const positiveFeed = Math.round(good / totalSum * 100);
    
        return (
            <div>
                <FeedbackOptions onLeaveFeedback={this.incrementStatistics}></FeedbackOptions>
                {!visible && <Notification message="No feedback given"/> }
                { visible && <Statistics good={good} neutral={neutral} bad={bad} total={totalSum} positivePercentage={positiveFeed}/>}
            </div>
        )
    }
}

export default Feedback

