import React from 'react'
import { Link } from 'react-router'
import './index.scss';

const FooterBar = () => {

    return (

    	<div className="footer-bar">

    		<Link to='/home' activeClassName="selected">tab1</Link>
        	<Link to='/site' activeClassName="selected">tab2</Link>
        	<Link to='/my' activeClassName="selected">tab3</Link>

    	</div>

    )

};

export default FooterBar