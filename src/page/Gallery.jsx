import { useState } from 'react';
import GalleryInput from '../components/gallery/GalleryInput';
import GalleryList from '../components/gallery/GalleryList';
import GalleryVisual from '../components/gallery/GalleryVisual';
import useAxios from '../hooks/useAxios';

import { Container } from './style';

const Gallery = () => {
    const [text, setText] = useState('');
    const API_URL = `50946295-7656ba2a3480c1534c0fb12c0`;
    const url = `https://pixabay.com/api/?key=${API_URL}&q=${text}&image_type=photo`;
    const { state, loading, error } = useAxios(url);
    const onSearch = (txt) => {
        setText(txt);
    };
    if (loading) {
        return <div>로딩중...</div>;
    }
    if (error) {
        return <div>데이터를 불러오는 중 문제가 발생했습니다.</div>;
    }
    if (!state) {
        return null;
    }
    return (
        <Container>
            <GalleryVisual />
            <div className="inner">
                <GalleryInput onSearch={onSearch} />
                <GalleryList data={state.hits} />
            </div>
        </Container>
    );
};

export default Gallery;
