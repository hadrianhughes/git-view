import { connect } from 'react-redux';
import Layout from './index';
import { AppState } from '../../reducer';

const mapStateToProps = (state: AppState) => ({
  loadedUser: Boolean(state.userName),
  repositories: state.repositories
    .map(repo => ({
      textLeft: repo.name,
      textRight: repo.updatedAt
    }))
    .slice(0, 5)
});

export default connect(mapStateToProps)(Layout);
