import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { Modal, Tab } from 'semantic-ui-react';
import AccountPane from './AccountPane';
import PreferencesPane from './PreferencesPane';

// import { Grid, ButtonGroup, Button, Switch } from '@mui/material';
// import dot1 from '../../assets/new-image/setting-dot1.png';
// import dot2 from '../../assets/new-image/setting-dot2.png';
// import UserImage from '../../assets/new-image/user-image.png';
// import edit from '../../assets/new-image/edit-icon.png';
// import lock from '../../assets/new-image/lock-icon.png';
// import cross from '../../assets/new-image/cross-icon.png';

const UserSettingsModal = React.memo(
  ({
    email,
    name,
    username,
    avatarUrl,
    phone,
    organization,
    subscribeToOwnCards,
    isAvatarUpdating,
    usernameUpdateForm,
    emailUpdateForm,
    passwordUpdateForm,
    onUpdate,
    onAvatarUpdate,
    onUsernameUpdate,
    onUsernameUpdateMessageDismiss,
    onEmailUpdate,
    onEmailUpdateMessageDismiss,
    onPasswordUpdate,
    onPasswordUpdateMessageDismiss,
    onClose,
    onCloseAccount,
    theme
  }) => {
    const [t] = useTranslation();

    const panes = [
      {
        menuItem: t('common.account', {
          context: 'title',
        }),
        render: () => (
          <AccountPane
            email={email}
            name={name}
            username={username}
            avatarUrl={avatarUrl}
            phone={phone}
            organization={organization}
            isAvatarUpdating={isAvatarUpdating}
            usernameUpdateForm={usernameUpdateForm}
            emailUpdateForm={emailUpdateForm}
            passwordUpdateForm={passwordUpdateForm}
            onUpdate={onUpdate}
            onAvatarUpdate={onAvatarUpdate}
            onUsernameUpdate={onUsernameUpdate}
            onUsernameUpdateMessageDismiss={onUsernameUpdateMessageDismiss}
            onEmailUpdate={onEmailUpdate}
            onEmailUpdateMessageDismiss={onEmailUpdateMessageDismiss}
            onPasswordUpdate={onPasswordUpdate}
            onPasswordUpdateMessageDismiss={onPasswordUpdateMessageDismiss}
            onCloseAccount={onCloseAccount}
            theme={theme}
          />
        ),
      },
      {
        menuItem: t('common.preferences', {
          context: 'title',
        }),
        render: () => (
          <PreferencesPane subscribeToOwnCards={subscribeToOwnCards} onUpdate={onUpdate} />
        ),
      },
    ];

    // const [checked, setChecked] = React.useState(true);

    // const handleChange = (event) => {
    //   setChecked(event.target.checked);
    // };

    return (
      <>
        {/* setting-page-new-design */}
        {/* <div className="setting-tab-content">
          <div className="setting-main">
            <Grid container spacing={2}>
              <Grid item sm={12} md={6} className="setting-account">
                <div className='setting-list-account'>
                  <div className='setting-list-heading'>
                    <h3><img src={dot1} alt="" /> Account</h3>
                    <img src={UserImage} alt="" />
                  </div>
                </div>
                <div className='setting-list-btns'>
                  <ButtonGroup variant="contained" className='setting-lists-btn' aria-label="outlined primary button group">
                    <Button className="setting-btn-edit btn-img"><img src={edit} alt="" /> Edit User Name</Button>
                    <Button className="setting-btn-lock btn-img"><img src={lock} alt="" /> Edit Password</Button>
                    <Button className="setting-btn-cross btn-img"><img src={cross} alt="" /> Close Account</Button>
                  </ButtonGroup>
                </div>
                <div className='seting-list-form'>
                  <form>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input id="name" type="text" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input id="phone" type="text" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="organization">Organization</label>
                      <input id="organization" type="text" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input id="email" type="text" />
                    </div>
                    <button className='seting-list-btn'>Save</button>
                  </form>
                </div>
              </Grid>
              <Grid item sm={12} md={6} className="setting-preferences">
                <div className='setting-list-account'>
                  <div className='setting-list-heading'>
                    <h3><img src={dot2} alt="" /> Preferences</h3>
                  </div>
                </div>
                <div className='seting-list-form'>
                  <div className="seting-pref-content">
                    <Switch
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <p>Subscribe to my own cards by default</p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div> */}
        {/* setting-page-new-design end */}

        <Modal open closeIcon onClose={onClose} id='settings-modal' className={classNames(theme)}>
          <Tab
            menu={{
              secondary: true,
              pointing: true,
            }}
            panes={panes}
          />
        </Modal>

      </>
    );
  },
);

UserSettingsModal.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string,
  avatarUrl: PropTypes.string,
  phone: PropTypes.string,
  organization: PropTypes.string,
  subscribeToOwnCards: PropTypes.bool.isRequired,
  isAvatarUpdating: PropTypes.bool.isRequired,
  /* eslint-disable react/forbid-prop-types */
  usernameUpdateForm: PropTypes.object.isRequired,
  emailUpdateForm: PropTypes.object.isRequired,
  passwordUpdateForm: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
  onUpdate: PropTypes.func.isRequired,
  onAvatarUpdate: PropTypes.func.isRequired,
  onUsernameUpdate: PropTypes.func.isRequired,
  onUsernameUpdateMessageDismiss: PropTypes.func.isRequired,
  onEmailUpdate: PropTypes.func.isRequired,
  onEmailUpdateMessageDismiss: PropTypes.func.isRequired,
  onPasswordUpdate: PropTypes.func.isRequired,
  onPasswordUpdateMessageDismiss: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onCloseAccount: PropTypes.func.isRequired,
  theme: PropTypes.func.isRequired,
};

UserSettingsModal.defaultProps = {
  username: undefined,
  avatarUrl: undefined,
  phone: undefined,
  organization: undefined,
};

export default UserSettingsModal;
