import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useSearchParams } from "react-router-dom";
import { useProductContext } from "../../../contexts/ProductContext/ProductContext";

export default function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(
    searchParams.get("category") || "all"
  );
  const { setPage } = useProductContext();
  const [firstMount, setFirstMount] = useState(true);

  React.useEffect(() => {
    if (firstMount) {
      setFirstMount(false);
      return;
    }

    setSearchParams({
      category,
    });
    // getFilteredProducts({ category });
    setPage(1);
  }, [category]);
  return (
    <FormControl>
      <FormLabel
        id="demo-radio-buttons-group-label"
        sx={{
          fontSize: "18px",
          borderBottom: "solid 1px blue",
          color: "darkblue",
        }}
      >
        Category
      </FormLabel>
      <RadioGroup
        sx={{ display: "flex", flexDirection: "row" }}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="all"
        value={category}
        name="radio-buttons-group"
      >
        <FormControlLabel
          onChange={() => setCategory("all")}
          value="all"
          control={<Radio />}
          label="All"
        />
        <FormControlLabel
          onChange={() => setCategory("electronics")}
          value="electronics"
          control={<Radio />}
          label="Gym"
        />
        <FormControlLabel
          onChange={() => setCategory("headphones")}
          value="headphones"
          control={<Radio />}
          label="Swimming lessons"
        />
        <FormControlLabel
          onChange={() => setCategory("phones")}
          value="phones"
          control={<Radio />}
          label="Yoga"
        />
        <FormControlLabel
          onChange={() => setCategory("laptops")}
          value="laptops"
          control={<Radio />}
          label="Stretching and Pilates"
        />
        <FormControlLabel
          onChange={() => setCategory("test")}
          value="test"
          control={<Radio />}
          label="Dance"
        />
        <FormControlLabel
          onChange={() => setCategory("Martial arts")}
          value="Martial arts"
          control={<Radio />}
          label="Martial arts"
        />
        <FormControlLabel
          onChange={() => setCategory("Mountain tourism")}
          value="Mountain tourism"
          control={<Radio />}
          label="Mountain tourism"
        />
        <FormControlLabel
          onChange={() => setCategory("Tennis")}
          value="Tennis"
          control={<Radio />}
          label="Tennis"
        />
        <FormControlLabel
          onChange={() => setCategory("Ballet")}
          value="Ballet"
          control={<Radio />}
          label="Ballet"
        />
      </RadioGroup>
    </FormControl>
  );
}
