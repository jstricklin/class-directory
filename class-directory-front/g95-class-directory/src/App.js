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
                <main className="d-flex my-auto pt-5 justify-content-center">
                    <section className="container-fluid">
                        <div className="col-sm-6 text-center mx-auto">
                            <header className="jumbotron main">

                                <h1 className="main-title">g95 Cohort Directory</h1>
                                <span className="spacer-1" />
                                <Profiles data={this.state.studentData}  />
                            </header>
                        </div>
                    </section>
                </main>
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
