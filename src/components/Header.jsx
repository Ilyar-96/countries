import styled from 'styled-components';

import { Container } from './Container';
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// const HeaderEl = styled.header``;


const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 0;
`;

const Title = styled(Link).attrs({
	to: '/'
})`
	color: var(--colors-text);
	font-size: var(--fs-sm);
	text-decoration: none;
	font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
	color: var(--colors-text);
	font-size: var(--fs-sm);
	text-transform: capitalize;
	cursor: pointer;
`;


const Header = () => {
	const [theme, setTheme] = useState('dark');

	const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

	useEffect(() => {
		document.body.dataset.theme = theme;
	}, [theme]);

	return (
		<Container>
			<Wrapper>
				<Title>Where is the world?</Title>
				<ModeSwitcher style={{ display: 'flex' }} onClick={toggleTheme}>
					{
						theme === 'dark' ?
							<IoMoon size="14px" /> :
							<IoMoonOutline size="14px" />
					}
					<span style={{ marginLeft: '.75rem' }}>{theme} Theme</span>
				</ModeSwitcher>
			</Wrapper>
		</Container>
	)
}

export default Header