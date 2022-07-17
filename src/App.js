import { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


class App extends Component {
  state={
    name : 'Khalil REJEB',
    bio : 'i am graduated as a mechanical engineer but i aim to begin a new career in web development and i found this chance with GOMYCODE,i had some experience in programming but i hope sto gain more through their courses',
    profession :'Mechanical Engineer & Web Development Student',
    shows: false,
    timer:0,
    interval: null,
}
componentDidMount(){
  this.setState({interval:setInterval(()=>{this.setState({timer:this.state.timer+ 1})
  },1000)})
}
  render(){
    const handleChange =a =>{
      this.setState({shows:!this.state.shows})
    }

    return  (

<center>
<Button variant="primary" size="lg" style={{marginTop:'60px'}} onClick={handleChange}>
click me        </Button>
{this.state.shows && <div>   <h2 id='count'>{this.state.timer}</h2>
<div id='main'>
  <h1 style={{fontSize:  '40px' , marginTop:'60px'}}>{this.state.name}</h1> 
  <h2 style={{fontSize:  '26px',marginBottom:'30px' }}>{this.state.profession}</h2>
  <h2 style={{fontSize:  '16px' , marginLeft:'5%',marginRight:'5%'}}>{this.state.bio}</h2>
  <img src='/Photo.jpg' alt='img'/>
  </div>
  </div>
}

</center>
    )      
  }
}
 export default App;
