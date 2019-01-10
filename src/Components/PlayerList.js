import React from 'react';

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
                    'a'
                ))
            }
        </div>
        }
    </>
);

export default PlayerList;