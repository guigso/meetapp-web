import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/logo.svg';
import { Container, Content, Profile, LogoutButton } from './styles';

export default function Header() {
    return (
        <Container>
            <Content>
                <nav>
                    <Link to="/dashboard">
                        <img src={logo} alt="MeetApp" />
                    </Link>
                </nav>

                <aside>
                    <Profile>
                        <div>
                            <strong>Guilherme</strong>
                            <Link to="/profile">Meu perfil</Link>
                        </div>

                        <LogoutButton>Sair</LogoutButton>
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}
