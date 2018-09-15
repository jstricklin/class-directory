import React, { Component } from 'react';
import Profiles from './components/profiles'

class App extends Component {
    componentDidMount(){
        getData();
    };
    render() {
        return (
            <div className="App">
                <main className="d-flex flex-column justify-content-center">
                    <section className="container-fluid">
                        <div className="col-sm-6 text-center mx-auto">
                            <header className="jumbotron main-header">

                                <h1 className="main-title">g95 Cohort Directory</h1>
                                <a>__________________________________</a>
                                <br />
                                <span className="spacer-1" />
                                <br />
                                <p>Click a student below to view more info</p>
                                <Profiles />
                            </header>
                        </div>
                    </section>
                </main>
            </div>
            );
    }
}

const getData = () => {
    const baseURL = 'https://class-directory-01.herokuapp.com/';
    return fetch(baseURL)
        .then(res => res.json())
        .then(json => console.log(json))
}

export default App;
