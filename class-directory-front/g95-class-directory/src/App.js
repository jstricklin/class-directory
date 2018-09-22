import React, { Component } from 'react';
import Profiles from './components/profiles'
import Admin from './components/Admin';
import { Route, Link, Switch } from 'react-router-dom';
import { Modal  } from 'reactstrap';
import LoginModal from './components/LoginModal'
const $ = require('jquery');

class LoginLink extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        const loggedIn = this.props.loggedIn
        let loginLink = loggedIn ? <li><Link to="/admin">Admin</Link></li> : <li><a onClick={this.props.toggle} href="#">Login</a></li>;
    return (
        <React.Fragment>
            {loginLink}
        </React.Fragment>
    )

}

}

class App extends Component {
    constructor(){
        super();
        this.state = {
            studentData: [],
            modal: false,
            loggedIn: false,
        }
        this.toggle = this.toggle.bind(this);
        this.loginClick = this.loginClick.bind(this)
    }
    loginClick() {
        // if (){

        // }
        this.setState({loggedIn: true})
        this.toggle()
    }
    toggle() {
        this.setState({
            modal: !this.state.modal,
        });
    }
    componentDidMount(){
        getData().then(data => this.setState({studentData: data}))
    };
    render() {
        return (
            <div className="App">
                <section className="container-fluid">
                    <nav>
                        <div className="col-sm-10 mx-auto">
                            <ul>
                                <li><a href="https://www.galvanize.com/" rel="noopener noreferrer" target="_blank">Galvanize WDI</a></li>
                                <li><Link to="/">Directory</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <LoginLink loggedIn={this.state.loggedIn} toggle={this.toggle }/>
                            </ul>
                        </div>
                    </nav>
                    <LoginModal loginHandler={this.loginClick} clickHandler={this.toggle} modal={this.state.modal} />
                    <main className="d-flex my-auto justify-content-center">
                        <section className="col-sm-6 text-center mx-auto pt-5">
                            <header className="jumbotron main">

                                <h2 className="main-title">g95 Cohort Directory</h2>
                                <span className="spacer-1" />
                                <Switch>
                                    <Route exact path="/" component={()=> ( <Profiles data={this.state.studentData}/> )} />
                                    <Route path='/admin' render={()=>(<Admin loginHandler={this.loginClick} students={this.state.studentData}/>)} component={ Admin } />
                                    <Route path="/about" component={About} />
                                </Switch>
                            </header>
                        </section>
                    </main>
                    <footer>
                        <div className="col-sm-10 mx-auto">
                            <p> 2018 Galvanize WDI - STUDENT WORK</p>
                        </div>
                    </footer>
                </section>
            </div>
            );
}
}
const About = () => {
    return (
        <div>
            <p>The g95 class directory was completed as part of a full stack application course utilizing various front and back end technologies to create, read, update, and delete information for a back-end database.</p>
        </div>
        );
}
const baseURL = 'https://class-directory-01.herokuapp.com/';
const getData = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export default App;
