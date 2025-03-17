import React from 'react'
import { Box,Button,TextField } from '@mui/material'

const Search =()=>
    {
      return(

        <>
          <Box  className="Search" >
          
            <TextField type='text'  className="SearchBox" variant='outlined' placeholder='Search....' display={'flex'} margin={'2'}  ></TextField>
           
          
          
          <Button className="primary_button"  >+ Add New</Button>
          </Box>
          
          
        </>

    )


    
}
 export default Search;