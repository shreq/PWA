import { h } from 'preact';
import './style.css';

const List = ({ items, itemsSet, itemsRemove }) => {
    return (
        <ul>
            {items.map(item => (
                <li>
                    <input checked={item.done} onChange={() => itemsSet(item.id, !item.done)} />
                    <span>
                        {item.title}
                    </span>
                    {item.done ? (
                        <button onClick={() => itemsRemove(item.id)}>
                            delete item
                        </button>
                    ) : (
                        <p />
                    )}
                </li>
            ))}
        </ul>
    )
}

export default List;
