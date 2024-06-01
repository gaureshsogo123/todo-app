import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Box,
  Stack,
  Typography,
} from "@mui/material";

function InputAndButton() {
  const [inputVal, setInputVal] = useState("");
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleAdd = () => {
    setData([...data, inputVal]);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        textAlign: "center",
        marginTop: "50px",
        backgroundColor: "purple",
        padding: "20px",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
      >
        <TextField
          placeholder="Enter todo Inputs"
          variant="outlined"
          fullWidth
          value={inputVal}
          onChange={handleChange}
          sx={{
            marginRight: "10px",
            borderRadius: "100px",
            backgroundColor: "white",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
              },
            },
          }}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: "500px" }}
          onClick={handleAdd}
        >
          +
        </Button>
      </Box>

      <Stack>
        {data?.map((val, i) => {
          return (
            <Box
              p={1}
              border={1}
              sx={{ backgroundColor: "white" }}
              borderColor={"silver"}
              m={1}
              borderRadius={3}
            >
              <Typography color={"black"} textAlign={"left"}>
                {val}
              </Typography>
            </Box>
          );
        })}
      </Stack>
    </Container>
  );
}

export default InputAndButton;
