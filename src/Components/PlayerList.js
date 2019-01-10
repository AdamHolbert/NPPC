import React from 'react';
import Player from './Player'

const PlayerList = ({ players }) => (
    <>
    {console.log(players)}
    {players.length === 0 ?
        <>
            <div className='mx-5 alert alert-light h1'>
                <div className="w-100 text-center">
                    No Players have been added yet.
                </div>
            </div>
        </>
        :
        <div className='container-fluid m-0'>
            {
                
                
                players.map(player => (
                    <Player key={player.name} isCool={true}player={player} />
                ))
            }
        </div>
        }
    </>
);

export default PlayerList;