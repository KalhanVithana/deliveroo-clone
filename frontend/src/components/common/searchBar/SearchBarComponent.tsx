import * as React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

interface Props {
  placeholder?: string;
  onChange?: (value: string) => void;
}

const SearchBarComponent: React.FC<Props> = ({ placeholder = 'Search', onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // onChange(event.target.value);
  };

  return (
    <TextField
      placeholder={placeholder}
      variant="outlined"
      className='search-bar'
      onChange={handleChange}
      
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBarComponent;
