import { connect } from 'react-redux';

import { pathSelector } from '../selectors';
import Fixed from '../componentsNew/Fixed';

const mapStateToProps = (state) => {
  const { projectId } = pathSelector(state);

  return {
    projectId,
  };
};

export default connect(mapStateToProps)(Fixed);
