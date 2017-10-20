import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchListData } from '../../actions/list'
import ListItem from '../../components/ListItem'

let scrollSite = 0;

class List extends Component {

	componentDidMount () {

		const { listData } = this.props;

		window.scrollTo(0, scrollSite)

		if (listData&&listData.length > 0) return;

		this.props.setListData();

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

const mapStateToProps = (state) => {

	return {

		listData: state.listData

	}

};

const mapDispatchToProps = (dispatch, ownProps) => {

	return {

		setListData: (...args) => dispatch(fetchListData(...args))

	}

};

export default connect(mapStateToProps, mapDispatchToProps)(List);
