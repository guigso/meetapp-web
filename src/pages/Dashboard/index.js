import React from 'react';
import api from 'services/api';

import { MdChevronRight, MdAddCircleOutline } from 'react-icons/md';
import { Container, Content, Meetup } from './styles';

export default function Dashboard() {
    return (
        <Container>
            <header>
                <h1>Meus Meetups</h1>
                <button type="button">
                    <MdAddCircleOutline size={24} color="#fff" />
                    Novo Meetup
                </button>
            </header>
            <ul>
                <Meetup>
                    <strong>Nome do evento</strong>
                    <aside>
                        <span>Horario</span>
                        <MdChevronRight size={32} color="#fff" />
                    </aside>
                </Meetup>
                <Meetup>
                    <strong>Nome do evento</strong>
                    <aside>
                        <span>Horario</span>
                        <MdChevronRight size={32} color="#fff" />
                    </aside>
                </Meetup>
                <Meetup>
                    <strong>Nome do evento</strong>
                    <aside>
                        <span>Horario</span>
                        <MdChevronRight size={32} color="#fff" />
                    </aside>
                </Meetup>
            </ul>
        </Container>
    );
}
