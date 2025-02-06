import React from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css'


class App extends React.Component{
    constructor(){//state created
        super()
        this.state = {//fields that will change 
            robots:[],
            searchfield:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => {this.setState({robots:users})});
    }
    //states are the values that will change and will be passed to or modified then passed to the components as props which have particular functions they will perform. 

    onSearchChange = (event) =>{//custom method to track change of search box that is passed to searchBox component for receiving the information
    //arrow func is used since noemal function will consider 'this' associated to input but we need to associate this to state.

    this.setState({searchfield : event.target.value})//in React we dont assign value directly to state field we use setState

    }
    render(){
        const {robots,searchfield}=this.state;
        //searchbox is now connected to app now we need to connect searchfield to filteredRobots

        const filteredRobots= robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })//comparing searchbox and robots
        if(robots.length===0){
            return(<h1 className='tc'>Loading...</h1>);
        }
        else{
            return(
                <div className='tc'>
                    <h1>Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>

                    {/* this wraps the component on which the feature needs to be added. uses children. scroll's children is cardList so props.children */}
                    <Scroll>
                    <CardList robots={ filteredRobots }/>
                    </Scroll> 
    
                    {/* using filteredRobots as props here and passing only those robots matching to searchfield to the robots which returns only those robots that matches the searchfirld rather than returning the whole array*/}
    
                </div>
            );
        }       
    }
}

export default App;
