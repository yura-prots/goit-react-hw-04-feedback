/* eslint-disable default-case */
import { useState } from 'react';

import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

import { Container, Wrapper } from './App.styled';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = e => {
    switch (e.target.name) {
      case 'good':
        return setGood(prevGood => prevGood + 1);

      case 'neutral':
        return setNeutral(prevNeutral => prevNeutral + 1);

      case 'bad':
        return setBad(prevBad => prevBad + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };

  return (
    <Container>
      <Section title={'Please leave feedback'}>
        <Wrapper>
          <FeedbackOptions onLeaveFeedback={addFeedback} />
        </Wrapper>
      </Section>

      <Section title={'Statistics'}>
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message={'There is no feedback'}></Notification>
        )}
      </Section>
    </Container>
  );
};

export default App;
