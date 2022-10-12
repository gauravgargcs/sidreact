import { connect } from 'react-redux';

import SocketStatuses from '../constants/SocketStatuses';
import SocketStatus from '../componentsNew/SocketStatus';

const mapStateToProps = ({ socket: { status } }) => ({
  isDisconnected: status === SocketStatuses.DISCONNECTED,
  isReconnected: status === SocketStatuses.RECONNECTED,
});

export default connect(mapStateToProps)(SocketStatus);
