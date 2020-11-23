import { h } from 'preact';
import { useState } from 'preact/hooks';
import uuid from 'uuid/v4'
import Form from '../../components/form/index.js'
import List from '../../components/list/index.js'
import style from './style.css';

const Home = () => {
	const [items, setItems] = useState([]);
	const [mounted, setMounted] = useState(false);

	const itemsAdd = title => {
		setItems([
			{
				title,
				id: uuid(),
				done: false
			},
			...items
		])
	}
	const itemsRemove = id => {
		setItems(
			items.filter(item => id != item.id)
		)
	}
	const itemsSet = (id, done) => {
		setItems(
			items.map(item =>
				(item.id === id ? { ...item, done } : item))
		)
	}

	return (
		<div class={style.home}>
			<h1>Home</h1>
			<Form itemsAdd={itemsAdd} />
			<List items={items} itemsRemove={itemsRemove} itemsSet={itemsSet} />
		</div>
	)
}

export default Home;
