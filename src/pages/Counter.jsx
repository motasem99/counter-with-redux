import Fragment from 'render-fragment';
import { connect } from 'react-redux';
import {
  increaseCounter,
  decreaseCounter,
  resetCounter,
} from '../redux/action/count';

import { useHistory } from 'react-router-dom';

const Counter = ({
  count: { count },
  increaseCounter,
  decreaseCounter,
  resetCounter,
}) => {
  const history = useHistory();

  return (
    <Fragment>
      <p>the current count is: {count}</p>
      <button onClick={() => increaseCounter(1)}>+1</button>
      <button onClick={() => decreaseCounter(-1)}>-1</button>
      <button onClick={resetCounter}>reset counter</button>
      <button onClick={() => history.push('/about')}>go to about page</button>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  count: state.count,
});

export default connect(mapStateToProps, {
  increaseCounter,
  decreaseCounter,
  resetCounter,
})(Counter);
