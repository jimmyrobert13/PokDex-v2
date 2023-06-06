import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { ChangeEvent, FormEvent } from 'react';
import CustomTextField from '../TextFieldCustom';

export default function Search() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    console.log('gg t', event);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('gg t', event.target.value);
  };

  const handleIconClick = () => {
    // Lógica do evento onClick do ícone
    console.log('gg Ícone clicado!');
  };

  return (
    <div className="flex justify-center p-2">
      <div className="w-4/5">
        <form className="flex justify-center" onSubmit={handleSubmit}>
          <div className="flex w-4/5">
            <CustomTextField
              className="w-full"
              endAdornment={
                <IconButton onClick={handleIconClick}>
                  <SearchIcon />
                </IconButton>
              }
              onChange={handleChange}
              placeHolder="Search for Pokemon"
              styleProps="bg-white border-0 rounded-2xl rounded-tr-none rounded-br-none text-center text-xl py-4 px-6  h-12 rounded-tr-2xl"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
