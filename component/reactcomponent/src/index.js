/**
 * Created by <%= author %><<%= email %>>.
 * ComponentName <%= upperCaseName %>
 * Desc <%= desc %>
 * GroupName <%= groupName %>
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classNames from 'classnames'
import './index.scss'


/**
 * @class <%= upperCaseName %>
 * @extends React.Component
 * @desc <%= upperCaseName %> Component for mobile
 */
export default class <%= upperCaseName %> extends Component {

    static propTypes = {
        /**
         * 主内容
         */
        content: PropTypes.string.isRequired
    };

    static defaultProps = {
        content: 'React test demo'
    };

    /**
     * @constructor
     */
    constructor(props) {
        super(props);

        this.state = {
            isActive: false
        }

        this.handle = this.handle.bind(this);
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handle(){
        this.setState({
            isActive: !this.state.isActive
        });
    }

    render () {

        let {
            content
        } = this.props;
        let {
            isActive
        } = this.state;

        let customClassName = classNames({
            active: isActive,
            btn: true,
        });

        return (
            <div>
                <div className={customClassName} onClick={this.handle}> {content} </div>
            </div>
        )
    }

}
