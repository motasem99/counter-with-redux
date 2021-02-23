import { connect } from 'react-redux';

const About = ({ count: { count } }) => {
  return (
    <div>
      <p>current count{count}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.count,
});

export default connect(mapStateToProps)(About);
