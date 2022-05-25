import * as React from 'react';
import Button from '@mui/material/Button';

export function Logout({handleLogout}){
    return(
      
        <Button variant="outlined" color="error" handleLogout = {handleLogout}>
        LOGOUT
      </Button>
    )
}
