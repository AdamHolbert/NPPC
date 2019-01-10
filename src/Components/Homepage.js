import React from 'react';
import {MDBRow, MDBCol} from 'mdbreact'
import {withFirebase} from "./Firebase/context";
import PlayerList from './PlayerList'

class HomePage extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.addedAuthor = this.addedAuthor.bind(this);
        
        this.state = {
            loading: false,
            adminView: false,
            playerList: [],
        };
    }
    
    
    componentDidMount() {
        this.setState({ loading: true });
        
        this.ref = this.props.firebase.players();
        
        this.ref.on('value', snapshot => {
            const playerObject = snapshot.val();
            
            const playerList = playerObject ? Object.keys(playerObject).map(playerId => ({
                playerId: playerObject[playerId]
            })) : [{'name':'Adam Holbert'}, {'name': 'Sear'}];
            
            this.setState({
                playerList: playerList,
                loading: false
            });
        },error => {console.log(error);}
        );
    }
    
    componentWillUnmount() {
        if(this.ref) this.ref.off();
    }
    
    componentWillUpdate(nextProps, nextState){
        // if users have changed
        if(nextState.addEditCard && (!this.props.session.state.role || this.props.session.state.role !== 'admin')){
            this.setState({addEditCard: false});
        }
        if(nextState.loadAdminView && (!this.props.session.state.role || this.props.session.state.role !== 'admin')){
            this.setState({loadAdminView: false});
        }
        if(!nextState.loadAdminView && nextState.addEditCard){
            this.setState({addEditCard: false});
        }
    }
    
    addedAuthor = () => {
        this.setState({addEditCard: false});
    };
    
    render(){
        const {playerList} = this.state;
        return(
            <>
                <MDBRow>
                    <MDBCol className='h1 text-center bg-white'>
                        Standing
                    </MDBCol>

                    <MDBCol className='h1 text-center bg-danger'>
                        Stats
                    </MDBCol>
                </MDBRow>
                <PlayerList players={playerList} />
            </>
        )
    };
};

export default withFirebase(HomePage);
