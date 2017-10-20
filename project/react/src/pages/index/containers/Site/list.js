import React, { Component } from 'react'
import ListItem from '../../components/ListItem'

let scrollSite = 0;

class List extends Component {

	componentDidMount () {

		window.scrollTo(0, scrollSite)

	}

	componentWillUnmount () {

		scrollSite = window.scrollY;

	}

	render () {

		const { listData } = this.props;

		return (

			<div>

				{

					listData.map((item) => {

						return <ListItem key={item.id} title={item.title} id={item.id}/>

					})

				}

			</div>

		)

	}

}

export default List;
