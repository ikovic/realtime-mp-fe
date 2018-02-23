import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editUser } from 'reducers/user';

const emptyUser = {
  fullName: '',
  nickname: '',
  avatar: '',
};

class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: props.user || emptyUser,
    };
  }

  handleChange = event => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({ user: { ...this.state.user, [key]: value } });
  };

  render() {
    const { user } = this.state;
    const { fullName, nickname, avatar } = user;
    const { save } = this.props;    

    return (
      <div>
        <h1 className="f3 bg-near-white br3 br--top black-60 mv0 pv2 ph3 tc">Edit your profile</h1>
        <div className="flex justify-center">
          <div className="pa4 mw6">
            <div>
              <label className="f5 db mb2">Full name</label>
              <input
                className="ba b--black-20 pa2 mb2 db w-100"
                value={fullName}
                onChange={this.handleChange}
                name="fullName"
              />
            </div>
            <div>
              <label className="f5 db mb2">Nickname</label>
              <input
                className="ba b--black-20 pa2 mb2 db w-100"
                value={nickname}
                onChange={this.handleChange}
                name="nickname"
              />
            </div>
            <div>
              <label className="f5 db mb2">Avatar</label>
              <input
                type="file"
                accept="image/*"
                value={avatar}
                onChange={this.handleChange}
                name="avatar"
              />
            </div>
            <div className="flex justify-end pa3">
              <button className="f6 link dim ba ph3 pv2 mb2 dib black" onClick={() => save(user)}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.userProfile,
});

const mapDispatchToProps = dispatch => ({
  save: user => dispatch(editUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
