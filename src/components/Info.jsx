import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { filterByCode } from '../config';
import { Button } from './Button';

const Wrapper = styled.section`
	margin-top: 4rem;

	@media (min-width:768px){
		display: flex;
		gap: 3rem;
	}
	@media (min-width:992px){
		gap: 5rem;
	}
	@media (min-width:1200px){
		gap: 8rem;
	}
`;
const InfoImage = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	max-width: 400px;
	margin-bottom: 3rem;

	@media (min-width:768px){
		max-width: 50%;
		margin-bottom: 0;
	}

	@media (min-width:991px){
		max-width: 40%;
		margin-bottom: 0;
	}
	
	@media (min-width:991px){
		max-height: 400px;
	}
`;
const InfoTitle = styled.h1`
	font-size: 20px;
	font-weight: var(--fw-bold);
	margin-top: 0;
	margin-bottom: 0.5rem;
`;

const ListGroup = styled.div`
	@media (min-width:992px){
		display: flex;
		gap: 7rem;
	}
`;

const List = styled.ul`
	list-style: none;
	margin: 0;
	padding: 1rem 0 0;
`;

const ListItem = styled.li`
	margin-bottom: .5rem;
	font-size: var(--fs-sm);
	line-height: 1.5;
	font-weight: var(--fw-light);

	& > b {
		font-weight: var(--fw-bold);
	}
`;

const Meta = styled.div``;

const TagGroup = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
`;

const BorderItemsTitle = styled.h3`
	font-size: 18px;
	font-weight: var(--fw-normal);
	margin-bottom: 1.5rem;
	padding: 1rem 0 0;
`;


const Info = (props) => {
	const {
		name,
		nativeName,
		population,
		flag,
		region,
		subregion,
		capital,
		topLevelDomain = [],
		languages = [],
		currencies = [],
		borders = [],
		navigate
	} = props;

	const [neighbors, setNeighbors] = useState([]);

	useEffect(() => {
		if (borders.length)
			axios.get(filterByCode(borders)).then(({ data }) => setNeighbors(data.map(d => d.name)))
	}, [borders])

	return (
		<Wrapper>
			<InfoImage src={flag} alt={name} />

			<div>
				<InfoTitle>{name}	</InfoTitle>
				<ListGroup>
					<List>
						<ListItem>
							<b>Native Name: </b>{nativeName ? nativeName : '-'}
						</ListItem>
						<ListItem>
							<b>Population: </b>{population ? population.toLocaleString() : '-'}
						</ListItem>
						<ListItem>
							<b>Region: </b>{region ? region : ''}
						</ListItem>
						<ListItem>
							<b>Sub Region: </b>{subregion ? subregion : '-'}
						</ListItem>
						<ListItem>
							<b>Capital: </b>{capital ? capital : '-'}
						</ListItem>
					</List>
					<List>
						<ListItem>
							<b>Top Level Domain: </b>{topLevelDomain.length ? topLevelDomain.map(el => el).join(', ') : '-'}
						</ListItem>
						<ListItem>
							<b>Currencies: </b>{currencies.map(c => c.name).join(', ')}
						</ListItem>
						<ListItem>
							<b>Languages: </b>{languages.map(l => l.name).join(', ')}
						</ListItem>
					</List>
				</ListGroup>

				<Meta>
					<BorderItemsTitle>Border Countries:</BorderItemsTitle>
					<TagGroup>{!borders.length ? (
						<span>There is no border countries</span>
					) : (
						<TagGroup>
							{neighbors.map(b => (
								<Button key={b.name} onClick={() => navigate(`/country/${b}`)}>{b}</Button>)
							)}
						</TagGroup>
					)}
					</TagGroup>
				</Meta>

			</div>
		</Wrapper>
	)
}

export default Info;