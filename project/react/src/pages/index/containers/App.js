import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Loading from 'flash-loading'
import FooterBar from 'commons/FooterBar'

class App extends Component {

    static childContextTypes = {

        loadingChangeHandle: PropTypes.func,

    };

    constructor (props) {

        super(props);
        this.state = {

            openLoading: false,

        };

        this.loadingChangeHandle = this.loadingChangeHandle.bind(this);

    }

    getChildContext () {

        return {

            loadingChangeHandle: this.loadingChangeHandle

        }

    }

    componentDidMount () {

        console.log('in this stage you can setState safe');

    }

    componentWillUnmount () {

        console.log('dont forget clear timer or remove listener');

    }

    loadingChangeHandle (open) {

        this.setState({ openLoading: open })

    }

    render () {

        return (

            <div>

                { this.props.children }

                <FooterBar />
                <Loading open={this.state.openLoading} />

            </div>

        )

    }

}

export default App;
