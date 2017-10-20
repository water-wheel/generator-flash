import React, { Component } from 'react'
import PropTypes from 'prop-types'
import request from 'api/request'

class Site extends Component {

    static propTypes = {

        highlighted: PropTypes.bool

    };

    static contextTypes = {

        loadingChangeHandle: PropTypes.func,

    };

    constructor (props) {

        super(props);
        this.state = {

            listData: []

        };

    }

    componentDidMount () {

        const { listData } = this.state;

        if (listData.length > 0) return;

        this.fetchListData();

    }

    fetchListData () {

        const { loadingChangeHandle } = this.context;

        loadingChangeHandle(true);

        request.post('/test/aaa', {})
            .then((data) => {

                this.setState({ listData: data })
                loadingChangeHandle(false)

            })

    }

    mergePropsToChildren () {

        const { children } = this.props;

        return React.cloneElement(children, { listData: this.state.listData })

    }

    render () {

        const cloneChildren = this.mergePropsToChildren();

        return cloneChildren

    }

}

export default Site