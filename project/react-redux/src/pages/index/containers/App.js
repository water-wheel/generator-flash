import React from 'react'
import Loading from 'flash-loading'
import { connect } from 'react-redux'
import FooterBar from 'commons/FooterBar'

const App = (props) => {

    return (

        <div>

            { props.children }

            <FooterBar />
            <Loading
                open={props.openLoading}
                 />

        </div>

    )

};

const mapStateToProps = (state) => {

	return {

		openLoading: state.loadingData.openLoading

	}

};

export default connect(mapStateToProps)(App);
