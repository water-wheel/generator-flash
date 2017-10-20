import React, { Component } from 'react'
import <%= upperCaseName %> from '../src/index.js'
import './index.scss'

export default class App extends Component {

    constructor(args, context){
        super(args);

        this.state = {
            content: 'Click and change color 😜',
            styles: 'active'
        }

        this.handleAc = this.handleAc.bind(this);
    }

    handleAc() {
        this.setState({
            styles: this.state.styles ? '' : 'active'
        })
    }


    render() {
        return (
            <section className="container">
                <<%= upperCaseName %> {...this.state} handle={this.handleAc} />
            </section>
        )
    }
}
