import { h } from 'preact';
import './style.css';

const List = ({ items, itemsSet, itemsRemove }) => {
    if (items.length === 0) {
        return (
            <p>
                List is empty
            </p>
        );
    }

    return (
        <ul>
            {items.map(item => (
                <li>
                    <input type="checkbox"
                        checked={item.done}
                        onChange={() => itemsSet(item.id, !item.done)} />
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
    );
}

export default List;
