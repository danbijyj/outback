import { useState } from 'react';
import { GalleryInputStyle } from './style';

const GalleryInput = ({ onSearch }) => {
    const [text, setText] = useState('');
    const changeInput = (e) => {
        const { value } = e.target;
        setText(value);
    };
    const onsubmit = (e) => {
        e.preventDefault();
        onSearch(text);
    };
    return (
        <GalleryInputStyle onSubmit={onsubmit}>
            <p>
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="이미지를 검색하세요."
                    onChange={changeInput}
                />
                <button type="submit">
                    <img src="./images/search.png" alt="" />
                </button>
            </p>
            {/* <p>
                <i>X</i>
                <span>dog</span>
                <span>cat</span>
                <span>bird</span>
            </p> */}
        </GalleryInputStyle>
    );
};

export default GalleryInput;
