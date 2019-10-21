import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import { Form, Input, Textarea } from '@rocketseat/unform';
import DatePickerInput from './DatePickerInput';

import { Container, SaveButton } from './styles';
import BannerInput from './BannerInput';

export default function Meetup({ meetup }) {
    function handleSubmit(data) {
        console.log(data);
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <BannerInput name="banner_id" />
                <Input name="name" placeholder="Titulo do Meetup" />
                <Textarea name="description" placeholder="Descrição completa" />
                <DatePickerInput name="date" placeholder="Data do Meetup" />
                <Input name="address" placeholder="Localização" />
                <SaveButton type="submit">
                    <MdAddCircleOutline size={25} />
                    Salvar Meetup
                </SaveButton>
            </Form>
        </Container>
    );
}
