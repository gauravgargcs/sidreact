import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { allUsersExceptCurrentSelector, notificationsForCurrentUserSelector } from '../selectors';
import { closeModal, deleteUser, updateUser, deleteNotification, } from '../actions/entry';
import { setDarkTheme, setLightTheme, setNewDarkTheme, setNewLightTheme } from '../actions/theme';
import NotificationsModal from '../componentsNew/NotificationsModal';
import { notificationmodalOpen, notificationmodalClose } from '../actions/notificationmodal';

const mapStateToProps = (state) => {
  const items = allUsersExceptCurrentSelector(state);
  const notifications = notificationsForCurrentUserSelector(state);

  return {
    items,
    notifications,
    theme : state.theme.theme,
    notificationmodal:state.notificationmodal.active
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      onUpdate: updateUser,
      onDelete: deleteUser,
      onClose: closeModal,
      setDarkUI : setDarkTheme,
      onNotificationDelete: deleteNotification,
      setLightUI : setLightTheme,
      setNewDarkUI: setNewDarkTheme,
      setNewLightUI: setNewLightTheme,
      notificationmodalopen:  notificationmodalOpen,
      notificationmodalclose:  notificationmodalClose
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsModal);
