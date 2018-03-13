import React, { Component } from 'react';
import { connect } from 'react-redux';

class Lobby extends Component {
  render() {
    const { lobbies } = this.props;
    return (
      <section className="flex justify-center">
        <table className="collapse ba vr2 pv2 ph3 ma5 w-75">
          <thead>
            <tr>
              <th className="pv2 ph3 tl f3 fw6">Name</th>
              <th className="pv2 ph3 tc f3 fw">Players/Max Players</th>
              <th className="pv2 ph3 tr f3 fw6">Join</th>
            </tr>
          </thead>
          <tbody>
            {lobbies.map(lobby => (
              <tr key={lobby.id} className="stripped--light-gray">
                <td className="pv2 ph3 tl f6">{lobby.name}</td>
                <td className="pv2 ph3 tc f6">
                  {lobby.players}/{lobby.maxPlayers}
                </td>
                <td className="pv2 ph3 tr f6">
                  <button disabled={lobby.players >= lobby.maxPlayers}>Join</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  lobbies: state.lobbies.lobbies,
});

export default connect(mapStateToProps)(Lobby);
