import { connect } from 'react-redux';
import Profile from './index';
import { AppState } from '../../reducer';

const mapStateToProps = (state: AppState) => ({
  avatar: state.avatar,
  userName: state.userName,
  url: `https://github.com/${state.userName}`
});

export default connect(mapStateToProps)(Profile);
