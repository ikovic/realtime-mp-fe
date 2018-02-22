import React, { Component } from 'react';

class EditProfile extends Component {
  render() {
    return (
      <div>
        <h1 className="f3 bg-near-white br3 br--top black-60 mv0 pv2 ph3 tc">Edit your profile</h1>
        <div className="flex justify-center">
          <form className="pa4 mw6">
            <div>
              <label className="f5 db mb2">Full name</label>
              <input className="ba b--black-20 pa2 mb2 db w-100" />
            </div>
            <div>
              <label className="f5 db mb2">Nickname</label>
              <input className="ba b--black-20 pa2 mb2 db w-100" />
            </div>
            <div>
              <label className="f5 db mb2">Avatar</label>
              <input type="file" accept="image/*" />
            </div>
            <div className="flex justify-end pa3">
              <a className="f6 link dim ba ph3 pv2 mb2 dib black">
                Save
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditProfile;
