import { h, Fragment } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';

const Form = ({ itemsAdd }) => {
    const input = useRef(null);
    const [value, setValue] = useState(
        new URL(window.location).searchParams.get('title') || ''
    )

    return (
        <div>
            <form autocomplete="off" onSubmit={e => {
                e.preventDefault();
                if (value !== '') {
                    itemsAdd(value);
                    setValue('');
                    input.current.focus();
                }
            }}>
                <input type="text" id="title" ref={input} value={value}
                onKeyUp={e => setValue(e.target.value)} autocomplete="off"/>
                <button type="submit">
                    Add
                </button>
            </form>
        </div>
    )
}

export default Form
