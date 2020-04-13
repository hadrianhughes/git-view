import { connect } from 'react-redux';
import Layout from './index';
import { AppState } from '../../reducer';

const mapStateToProps = (state: AppState) => ({
  loadedUser: Boolean(state.userName)
});

export default connect(mapStateToProps)(Layout);
