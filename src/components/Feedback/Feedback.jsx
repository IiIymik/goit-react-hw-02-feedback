import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';

export class Feedback extends Component {
    static defaultProps = {
        initialValue: 0,
    }
    static propTypes = {
        good: PropTypes.number,
        neutral: PropTypes.number,
        bad: PropTypes.number,
        visible:PropTypes.bool,
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

    countTotalFeedback = () => {
        const { good, neutral, bad} = this.state;
        return good + bad + neutral;
    }
    countPositiveFeedbackPercentage = (totalSum) => {
        const { good} = this.state;
        return Math.round(good / totalSum * 100);
    }
  
    render() {
        const { good, neutral, bad, visible} = this.state;
        const totalSum = this.countTotalFeedback();
        const positiveFeed = this.countPositiveFeedbackPercentage(totalSum);
    
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

