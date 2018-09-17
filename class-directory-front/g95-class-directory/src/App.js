import React, { Component } from 'react';
import Profiles from './components/profiles'

class App extends Component {
    constructor(){
        super();
        this.state = {
            studentData: []
        }
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
                                <li><a>Directory</a></li>
                                <li><a>Galvanize WDI</a></li>
                                <li><a>About</a></li>
                                <li><a>Login</a></li>
                            </ul>
                        </div>
                    </nav>
                    <main className="d-flex my-auto justify-content-center">
                        <section className="col-sm-6 text-center mx-auto pt-5">
                            <header className="jumbotron main">

                                <h1 className="main-title">g95 Cohort directory</h1>
                                <span className="spacer-1" />
                                <Profiles data={this.state.studentData}  />
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
const baseURL = 'https://class-directory-01.herokuapp.com/';
const getData = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export default App;
