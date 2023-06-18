import {useState} from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/Feedbackoptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const onClick = (event) => {
    const vote = event.currentTarget.textContent;
    console.log(vote);

    switch (vote) {
      case 'good':
        setGood(state => state + 1);
        break;
      
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      
      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return
    }
  }

  const totalFeedbackCount = () => {
    return good + neutral + bad;
  }
  
  const positiveFeedbackPercentage =() => {
    return Math.round((good / totalFeedbackCount()) * 100);
  }

    
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={onClick}/>
      </Section>
        
      <Section title="Statistics">
        {totalFeedbackCount() ?
        (<Statistics 
          good={good} 
          neutral={neutral} 
          bad={bad} 
          total={totalFeedbackCount()} 
          positivePercentage={positiveFeedbackPercentage()}/>)
          : (<Notification message="There is no feedback"/>)
        }
      </Section>
    </div>
  )
};