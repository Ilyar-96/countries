import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { IoArrowBack } from 'react-icons/io5'
import { useState } from "react";

import { Button } from "../components/Button";
import Info from "../components/Info";
import { searchByCountry } from "../config";

const Details = () => {
	const { name } = useParams();
	const navigate = useNavigate();
	const [country, setCountry] = useState({});

	useEffect(() => {
		axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]))
	}, [name])
	return (
		<>
			<Button onClick={() => { navigate(-1) }}><IoArrowBack /> Go back</Button>
			{country && <Info navigate={navigate} {...country} />}
		</>
	)
}

export default Details