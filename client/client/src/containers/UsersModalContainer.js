import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { allUsersExceptCurrentSelector } from '../selectors';
import { closeModal, deleteUser, updateUser, } from '../actions/entry';
import { setDarkTheme, setLightTheme, setNewDarkTheme, setNewLightTheme } from '../actions/theme';
import UsersModal from '../componentsNew/UsersModal';
import { usermodalOpen, usermodalClose } from '../actions/usermodal';

const mapStateToProps = (state) => {
  const items = allUsersExceptCurrentSelector(state);

  return {
    items,
    theme : state.theme.theme,
    usermodal:state.usermodal.active
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      onUpdate: updateUser,
      onDelete: deleteUser,
      onClose: closeModal,
      setDarkUI : setDarkTheme,
      setLightUI : setLightTheme,
      setNewDarkUI: setNewDarkTheme,
      setNewLightUI: setNewLightTheme,
      usermodalopen: usermodalOpen,
      usermodalclose: usermodalClose,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(UsersModal);
