import { TextField, RadioGroup, Stack, FormControlLabel, Radio, FormHelperText } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export default function BasicDetailsScreen ({
    firstName,
    setFirstName,
    lastName,
    setLastName,
    dateOfBirth,
    setDateOfBirth,
    gender,
    setGender,
    email,
    setEmail
}) {
    const error = false;

    function handleFirstNameChange(evt) {
        evt.stopPropagation();
        setFirstName(evt.target.value);
    }

    function handleFirstNameInput(evt) {
        evt.stopPropagation();
        setFirstName(evt.target.value);
    }

    function handleLastNameChange(evt) {
        evt.stopPropagation();
        setLastName(evt.target.value);
    }

    function handleLastNameInput(evt) {
        evt.stopPropagation();
        setLastName(evt.target.value);
    }

    function handleDateOfBirthChange(value) {
        setDateOfBirth(value);
        console.log("DOB:  ", value);

    }

    function handleGenderChange(evt) {
        evt.stopPropagation();
        setGender(evt.target.value)
    }

    function handleEmailChange(evt) {
        evt.stopPropagation();
        setEmail(evt.target.value);
    }

    return (
        <>
            <Stack spacing={3}>
                <Stack direction={"row"} spacing={2}>
                    <TextField
                        placeholder="First Name"
                        value={firstName}
                        onChange={handleFirstNameChange}
                        onInput={handleFirstNameInput}
                        error={false}
                    />
                    <TextField
                        placeholder="Last Name"
                        value={lastName}
                        onChange={handleLastNameChange}
                        onInput={handleLastNameInput}
                        error={false}
                    />
                </Stack>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Date of Birth"
                        value={dateOfBirth}
                        onChange={handleDateOfBirthChange}
                        slotProps={{
                            textField: {
                                fullWidth: true,
                            },
                        }}
                        openTo="year"
                        views={['year', 'month', 'day']}
                        maxDate={new Date()} 
                    />
                </LocalizationProvider>

                <RadioGroup
                    row
                    value={gender}
                    onChange={handleGenderChange}
                >
                    <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                    <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                    <FormControlLabel value="other" control={<Radio/>} label="Other"/>
                    {error && <FormHelperText>Please select a gender.</FormHelperText>}
                </RadioGroup>
                
                <TextField
                    type="email"
                    placeholder="Email"
                    variant="outlined"
                    onChange={handleEmailChange}
                    error={false}
                    helperText=""

                />
            </Stack>
        </>
    );
}