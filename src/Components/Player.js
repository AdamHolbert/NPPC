import React from 'react';


class Player extends React.Component {


    constructor(props) {
        super(props);
    }

    render(){

        const {player} = this.props;
        console.log(player)

      return(

          <div>
              {player.name}
          </div>
      )
    }

};
export default Player;