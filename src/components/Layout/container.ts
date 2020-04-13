import { connect } from 'react-redux';
import Layout from './index';
import { AppState } from '../../reducer';
import { timeSince } from '../../utils';

const mapStateToProps = (state: AppState) => ({
  loadedUser: Boolean(state.userName),
  repositories: state.repositories
    .map(repo => ({
      textLeft: repo.name,
      textRight: timeSince(new Date())(new Date(repo.updatedAt))
    }))
    .slice(0, 5)
});

export default connect(mapStateToProps)(Layout);
