import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const SearchBox = ({ history }) => {
	const [keyword, setKeyword] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();
		if (keyword.trim()) {
			history.push(`/search/${keyword}`);
		} else {
			history.push('/');
		}
	};

	return (
		<Form onSubmit={submitHandler}>
			<Row>
				<Col className='col-8 p-0'>
					<Form.Control
						type='text'
						name='q'
						onChange={(e) => setKeyword(e.target.value)}
						placeholder='Search Products...'
						className='mr-sm-2 ml-sm-5 col-10'
					></Form.Control>
				</Col>
				<Button type='submit' variant='outline-success' className='col-4 p-0'>
					Search
				</Button>
			</Row>
		</Form>
	);
};

export default SearchBox;
