import PropTypes from 'prop-types';

import { Button } from './FeedbackOptions.styled';

const options = ['good', 'neutral', 'bad'];

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return options.map(option => (
    <Button type="button" key={option} name={option} onClick={onLeaveFeedback}>
      {option}
    </Button>
  ));
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
