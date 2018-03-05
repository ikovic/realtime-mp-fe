import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as lobbyActions from 'reducers/lobbies';

class Lobby extends Component {
  componentDidMount() {
    this.props.fetchLobbies();
  }

  render() {
    const { lobbies } = this.props;
    return (
      <table className="collapse ba vr2 pv2 ph3">
        <thead>
          <tr>
            <th className="pv2 ph3 tl f6 fw6">Name</th>
            <th className="pv2 ph3 tl f6 fw6">Players/Max Players</th>
            <th className="pv2 ph3 tl f6 fw6">Join</th>
          </tr>
        </thead>
        <tbody>
          {lobbies.map(lobby => (
            <tr key={lobby.id} className="stripped--light-gray">
              <td className="pv2 ph3 tl f6 fw6">{lobby.name}</td>
              <td className="pv2 ph3 tr f6 fw6">
                {lobby.players}/{lobby.maxPlayers}
              </td>
              <td className="pv2 ph3 tl f6 fw6">
                <button disabled={lobby.players >= lobby.maxPlayers}>Join</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({
  lobbies: state.lobbies.lobbies,
});

const mapDispatchToProps = dispatch => ({
  fetchLobbies: () => dispatch(lobbyActions.fetchLobbies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Lobby);
