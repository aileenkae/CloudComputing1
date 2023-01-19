import * as React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
// This component will be used to display the search input field with the search icon 
export default function SearchInput() {
    return (
        <FormControl className='w-full' variant="filled">
            <InputLabel htmlFor="search">Search</InputLabel>
            <FilledInput
                id="search"
                startAdornment={<InputAdornment position = "start" > <SearchIcon/>
            </InputAdornment>
                }
            />
        </FormControl>
    );
}