import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { register } from '../actions/entry';
import { clearRegisterError, registerError } from '../actions';
import { loadTheme, setDarkTheme, setLightTheme, setNewDarkTheme, setNewLightTheme } from '../actions/theme';
import Register from '../componentsNew/Register';

const mapStateToProps = ({ registerForm: { data: defaultData, isSubmitting, error, status }, theme : {theme} }) => ({
  defaultData,
  isSubmitting,
  error,
  status,
  theme
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      onRegister: register,
      onMessageDismiss: clearRegisterError,
      onMessage: registerError,
      loadUI: loadTheme,
      setLightUI: setLightTheme,
      setDarkUI: setDarkTheme,
      setNewDarkUI: setNewDarkTheme,
      setNewLightUI: setNewLightTheme,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Register);
