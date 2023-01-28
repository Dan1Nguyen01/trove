import React from 'react'
import {Container, Form} from 'react-bootstrap';
const SearchingBar = () => {
    const [search, setSearch] = React.useState("");
  return (
    <Container className='d-flex flex-column py-2 px-auto'>
        <h1>Browse Music</h1>
        <Form.Control type='search' placeholder = 'Search Songs/Artists' value={search} onChange ={(e)=> (e.target.value)}/>
    </Container>
  )
}

export default SearchingBar