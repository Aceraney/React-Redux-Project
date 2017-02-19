
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import BattlefieldPage from './BattlefieldPage';

function mapStateToProps(state) {
    return {
        users: state.users,
        background: state.background
    }
}

function mapDispachToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(BattlefieldPage);

export default App;