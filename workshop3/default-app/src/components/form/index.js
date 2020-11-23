import { h, Fragment } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';

const Form = ({ className = '', itemsAdd }) => {
    const input = useRef(null);
    const [value, setValue] = useState(
        new URL(window.location).searchParams.get('title') || ''
    );

    useEffect(() => {
        const params = new URL(window.location).searchParams;
        const v = [
            ...(params.get('title') ? [params.get('title')] : []),
            ...(params.get('text') ? [params.get('text')] : []),
            ...(params.get('url') ? [params.get('url')] : []),
        ];

        setValue(v.join(' - '));
    }, []);

    return (
        <div className={className}>
            <form autocomplete="off"
                onSubmit={e => {
                    e.preventDefault();
                    if (value !== '') {
                        itemsAdd(value);
                        setValue('');
                        input.current.focus();
                    }
                }}
            >
                <input type="text"
                    name="title"
                    id="title"
                    ref={input}
                    value={value}
                    onKeyUp={e => setValue(e.target.value)}
                    autocomplete="off"
                />
                <button type="submit"
                className="font-bold rounded rounded-l-none text-white px-4 hover:bg-indigo-700 bg-indigo-800 text-center no-underline block focus:shadow-outline focus:outline-none">
                    Add
                </button>
            </form>
        </div>
    );
}

export default Form
