import React from 'react'
import { Button, Form } from "react-bootstrap/";
import SearchIcon from '@mui/icons-material/Search'; 


const Filter = ({setSearch}) => {
  return (
    <div>
<Form className="d-flex searchForm">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 searchInput"
              aria-label="Search"
              onChange={(e) =>{setSearch(e.target.value)}}
            />
            <Button className="searchButton" variant="outline-success" >
              <SearchIcon /> 
            </Button>
          </Form>


    </div>
  )
}

export default Filter;