import * as React from 'react';
import Select ,{ SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';



export default function BASelect() {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <Box sx={{ m: 1, width: 300, marginX: "auto", marginY: 3 }}>
            <FormControl fullWidth variant="filled" className="text-center">
                <InputLabel id="demo-simple-select-label">Select Mobile</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={"Iphone"}>Iphone</MenuItem>
                    <MenuItem value={"Redmi"}>Redmi</MenuItem>
                    <MenuItem value={"Vivo"}>Vivo</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
