import styled from 'styled-components';

const Wrapper = styled.article`
	border-radius: var(--radii);
	background-color: var(--colors-ui-base);
	box-shadow: var(--shadow);
	cursor: pointer;
	overflow: hidden;
`;

const CardImage = styled.img.attrs()`
	display: block;width: 100%;
	height: 50vw;
	object-fit: cover;
	object-position: center;
	box-shadow: var(--shadow);
	@media (min-width: 575px){
		height: 150px;
	}
`;

const CardBody = styled.div`
	padding: 1.5rem 1.5rem 1.7rem;
`;

const CardTitle = styled.h3`
	margin: 0;
	font-style: var(--fs-md);
	nav-down: var(--fw-bold);
`;

const CardList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 1rem 0 0;
`;

const CardListItem = styled.li`
	font-size: var(--fs-sm);
	line-height: 1.5;
	font-weight: var(--fw-light);

	& > b {
		font-weight: var(--fw-bold);
	}
`;

const Card = ({ img, name, info = [], onClick }) => {
	return (
		<Wrapper onClick={onClick} >
			<CardImage src={img} alt={name} />
			<CardBody>
				<CardTitle>{name}</CardTitle>
				<CardList>
					{info.map(el => (
						<CardListItem key={el.title}>
							<b>{el.title}:</b> {el.description ? el.description : '-'}
						</CardListItem>
					))}
				</CardList>
			</CardBody>
		</Wrapper>
	)
}

export default Card