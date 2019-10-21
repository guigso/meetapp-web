import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import api from 'services/api';

import { MdPhotoCamera } from 'react-icons/md';
import { Container } from './styles';

export default function BannerInput() {
    const { defaultValue, registerField } = useField('banner-input');

    const [file, setFile] = useState(defaultValue && defaultValue.id);
    const [preview, setPreview] = useState(defaultValue && defaultValue.url);

    const ref = useRef();

    useEffect(() => {
        if (ref.current) {
            registerField({
                name: 'banner_id',
                ref: ref.current,
                path: 'dataset.file',
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref]);

    useEffect(
        () =>
            setPreview(
                'http://localhost:3333/files/d38765f890fa9ddff66d76f8b9bc1911.jpg'
            ),
        []
    );

    async function handleChange(e) {
        const data = new FormData();

        data.append('file', e.target.files[0]);

        const response = await api.post('files', data);

        const { id, url } = response.data;

        setFile(id);
        setPreview(url);
    }
    return (
        <Container>
            <label htmlFor="banner-input">
                {(preview && <img src={preview} alt="Selected Banner" />) || (
                    <>
                        <MdPhotoCamera size={70} />
                        <p>Selecionar imagem</p>
                    </>
                )}
            </label>
            <input
                type="file"
                id="banner-input"
                accept="image/*"
                data-file={file}
                onChange={handleChange}
                ref={ref}
            />
        </Container>
    );
}
