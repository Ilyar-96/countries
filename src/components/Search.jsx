import styled from 'styled-components';

import { IoSearch } from 'react-icons/io5';

const InputContainer = styled.label`
	background-color: var(--colors-ui-base);
	padding: 1rem 2rem;
	display: flex;
	align-items: center;

	border: var(--radii);
	box-shadow: var(--shadow);
	width: 100%;
	margin-bottom: 1.5rem;

	@media (min-width: 768px){
	  margin-bottom: 0;
		width: 280px;
	}	
`;

const Input = styled.input.attrs({
	type: 'search',
	placeholder: 'Search for a country...'
})`
	width: 100%;
	margin-left: 2rem;
	border: none;
	outline: 0;
	background-color: transparent;
	color: var(--colors-text);
	&::placeholder {
		opacity: 1;
	}
`;

const Search = ({ search, setSearch }) => {
	return (
		<InputContainer>
			<IoSearch />
			<Input onChange={e => setSearch(e.target.value)} value={search} />
		</InputContainer>
	)
}

export default Search;