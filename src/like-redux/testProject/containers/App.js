import bindActionCreators from '../../src/bindActionCreators';
import increment from '../actions';
import connect from '../../src/connect';
import App from '../components/App.js';

function mapStateToProps(state) {
  const { count, staticValue } = state;

  return {
    count,
    staticValue,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ increment }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
