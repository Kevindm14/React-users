import React, { Component } from 'react'
import ListPost from './post'

export default class Posts extends Component {
	state = {
		post: []
	}

	async componentDidMount() {
		const posts = "https://jsonplaceholder.typicode.com/posts";
		const data = await fetch(posts);
		const res = await data.json();
		this.setState({
			post: res
		})
	}

	render() {
		return (
			<div className="container containers">
				<div className="row">
				{
					this.state.post.map(e => (
						<ListPost 
							post={e} 
							key={e.id}
						/>
					))
				}
			</div>
			</div>
		)
	}
}