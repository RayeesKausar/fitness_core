import { TextField, Select, Stack, MenuItem } from "@mui/material";

export default function FitnessDetailsForm ({
  height,
  setHeight,
  heightUnit,
  setHeightUnit,
  weight,
  setWeight,
  weightUnit,
  setWeightUnit,
  goal,
  setGoal,
  activity,
  setActivity,
  medical,
  setMedical,
}){

    function handleHeightChange(evt) {
        evt.stopPropagation();
        setHeight(evt.target.value);
    }

    function handleHeightUnitChange(evt) {
        evt.stopPropagation();
        setHeightUnit(evt.target.value);
    }

    function handleWeightChange(evt) {
        evt.stopPropagation();
        setWeight(evt.target.value);
    }

    function handleWeightUnitChange(evt) {
        evt.stopPropagation();
        setWeightUnit(evt.target.value);
    }

    function handleGoalChange(evt) {
        setGoal(evt.target.value);
    }

    function handleActivityChange(evt) {
        setActivity(evt.target.value);
    }

    function handleMedicalChange(evt) {
        setMedical(evt.target.value);
    }

    return (<>
        <Stack spacing={3}>
            <Stack direction={"row"} spacing={2}>
                <Select value={heightUnit} onChange={handleHeightUnitChange}>
                    <MenuItem value="cm">CM</MenuItem>
                    <MenuItem value="inches">Inches</MenuItem>
                </Select>
                <TextField 
                    placeholder="Height"
                    type="number"
                    error={false}
                    value={height}
                    onChange={handleHeightChange}
                />
                <Select value={weightUnit} onChange={handleWeightUnitChange}>
                    <MenuItem value="kg">KG</MenuItem>
                    <MenuItem value="pound">Pounds</MenuItem>
                </Select>
                <TextField 
                    placeholder="Weight"
                    type="number"
                    error={false}
                    value={weight}
                    onChange={handleWeightChange}
                />
            </Stack>
            <Select value={goal} onChange={handleGoalChange}>
                <MenuItem value="loose"> Loose Weight</MenuItem>
                <MenuItem value="gain"> Gain Muscle</MenuItem>
                <MenuItem value="maintain">Maintain weight</MenuItem>
            </Select>

            <Select value={activity} onChange={handleActivityChange}>
                <MenuItem value="active"> Active</MenuItem>
                <MenuItem value="moderate">  Moderate active</MenuItem>
                <MenuItem value="low">Low active</MenuItem>
            </Select>

            <TextField
                value={medical}
                onChange={handleMedicalChange}
                error={false}
                placeholder="Add if you have any injuries"
            />
        </Stack>
    </>);
}