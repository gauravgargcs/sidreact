import { connect } from 'react-redux';

import { currentBoardSelector } from '../selectors';
import BoardWrapper from '../componentsNew/BoardWrapper';

const mapStateToProps = (state) => {
  const { type, isFetching } = currentBoardSelector(state);

  return {
    type,
    isFetching,
  };
};

export default connect(mapStateToProps)(BoardWrapper);
