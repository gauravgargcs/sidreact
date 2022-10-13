import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import Countdown from 'react-countdown';
import Moment from 'react-moment';

import hasPermision from '../../utils/has-permission';

import SubscribeButton from './SubscribeButton';
import ProjectAddModal from '../ProjectAddModal';
import ProjectStatusModal from '../ProjectStatusModal';

import Paths from '../../constants/Paths';
import { Grid, ButtonGroup, Button, Switch } from '@mui/material';
import styles from './Projects.module.scss';

import dot1 from '../../assets/new-image/setting-dot1.png';
import dot2 from '../../assets/new-image/setting-dot2.png';
import UserImage from '../../assets/new-image/user-image.png';
import edit from '../../assets/new-image/edit-icon.png';
import lock from '../../assets/new-image/lock-icon.png';
import cross from '../../assets/new-image/cross-icon.png';

const Projects = React.memo(({
  items,
  isEditable,
  onCreate,
  onUpdate,
  onUpdateProjectMembership }) => {

  const [canCreateProject] = hasPermision('explicitly_added_projects_boards:create');
  console.log(isEditable)

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <div className="dashboard pages">
        <div className="dashboard-action">
          {/* Best leave isEditable alone, something might depend on it */}
          {/* {isEditable && (
          <span>&nbsp;</span>
        )} */}
          {/* isEditable && canCreateProject && ( */}
          {canCreateProject && (
            <div className="dashboard-project-add">
              <ProjectAddModal id='project-add-modal' onCreate={onCreate}>
                <button className="glass-btn" type="submit">
                  Add Project
                  <span /><span /><span /><span />
                </button>
              </ProjectAddModal>
            </div>
          )}
        </div>
        <ul className="dashboard-projects-list">
          {items.map((item) => {
            let cover = "";
            if (item.background && item.background.type === 'image' && item.backgroundImage.coverUrl) {
              if (process.env.NODE_ENV === 'development') {
                cover = item.backgroundImage.coverUrl.replace('http://localhost:3000/', 'http://localhost:1337/');
              } else {
                cover = item.backgroundImage.coverUrl;
              }
            }
            return (
              <li key={`dashboard-project-${item.id}`} className="dashboard-project"
                style={{
                  background:
                    (item.background &&
                      item.background.type === 'image') &&
                    `url("${cover}") center / cover`,
                }}>
                <div className='dashboard-project-wrapper'>
                  <div className="dashboard-project-creds">
                    <div className='dashboard-project-header'>
                      <input type='checkbox' />
                      <Link
                        to={
                          item.firstBoardId
                            ? Paths.BOARDS.replace(':id', item.firstBoardId)
                            : Paths.PROJECTS.replace(':id', item.id)
                        }
                      >
                        <h2>{item.name}</h2>
                      </Link>

                      {item.notificationsTotal > 0 && <span>{item.notificationsTotal}</span>}

                      <div>
                        {/*
                    <button
                     className={styles.ellipsis}
                      type = 'button'
                      onClick={handleToggleSubscriptionClick}
                    >
                      {item.isSubscribed ? <i className="fas fa-paper-plane"/> : <i className="far fa-paper-plane"/>}
                    </button>
                    */}
                        <SubscribeButton
                          klassName={styles.ellipsis}
                          project={item}
                          onToggleSubscribe={onUpdateProjectMembership} />

                        <ProjectStatusModal id='project-add-modal'
                          defaultData={item}
                          onUpdate={onUpdate}>
                          <button className={styles.ellipsis} type="submit">
                            <i className="fas fa-ellipsis-h" />
                          </button>
                        </ProjectStatusModal>
                      </div>
                    </div>
                    <ul>
                      {(item.description && item.description.length > 0) ?
                        <li>
                          <i className="fas fa-crosshairs" />
                          <span>{item.description}</span>
                        </li>
                        :
                        <></>
                      }
                      {
                        item.dueDate && (
                          <li>
                            <i className="far fa-calendar-alt" />
                            {Math.ceil((Math.abs(new Date(item.dueDate) - new Date()) / (24 * 60 * 60 * 1000))) > 30 ?
                              <span>
                                <Moment date={item.dueDate} format='DD MMMM,YYYY' />
                              </span>
                              :
                              <span>{Math.ceil((Math.abs(new Date(item.dueDate) - new Date()) / (24 * 60 * 60 * 1000)))} days left</span>
                            }
                          </li>
                        )
                      }
                    </ul>
                  </div>
                  <div className="dashboard-project-info">
                    <div className="dashboard-project-members">
                      <h4>Team members</h4>
                      <ul>
                        <li>
                          <img alt="" src="/Assets/Images/pic-1.jpeg" />
                        </li>
                        <li>
                          <img alt="" src="/Assets/Images/pic-2.jpg" />
                        </li>
                        <li>
                          <img alt="" src="/Assets/Images/pic-3.jpg" />
                        </li>
                        <li><span>+2</span></li>
                      </ul>
                    </div>
                    <div className="dashboard-project-progress">
                      <h4>Progress</h4>
                      <span>74%</span>
                    </div>
                  </div>
                  {/* </Link> */}
                </div>
              </li>
            )
          })}
        </ul>

        {/* setting-page-new-design */}
        <div className="setting-tab-content">
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
        </div>
        {/* setting-page-new-design end */}
      </div>
    </>
  );
});

Projects.propTypes = {
  items: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  isEditable: PropTypes.bool.isRequired,
  onCreate: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onUpdateProjectMembership: PropTypes.func.isRequired,
};

export default Projects;
