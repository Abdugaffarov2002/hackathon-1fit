import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useSearchParams } from "react-router-dom";
import { useProductContext } from "../../../contexts/ProductContext/ProductContext";

// interface IProps {
//   setGender: (gender: string) => void;
//   gender: string;
// { setGender, gender }: IProps}

export default function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(
    searchParams.get("category") || "all"
  );
  const { setPage, getProducts } = useProductContext();
  const [firstMount, setFirstMount] = useState(true);

  React.useEffect(() => {
    if (firstMount) {
      setFirstMount(false);
      return;
    }
    const currentParams = Object.fromEntries([...searchParams]);

    if (category === "all") {
      delete currentParams.category;
      setSearchParams({
        ...currentParams,
      });
    } else {
      setSearchParams({
        ...currentParams,
        category,
      });
    }
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
          onChange={() => setCategory("Gym")}
          value="Gym"
          control={<Radio />}
          label="Gym"
        />
        <FormControlLabel
          onChange={() => setCategory("Swimming lessons")}
          value="Swimming lessons"
          control={<Radio />}
          label="Swimming lessons"
        />
        <FormControlLabel
          onChange={() => setCategory("Yoga")}
          value="Yoga"
          control={<Radio />}
          label="Yoga"
        />
        <FormControlLabel
          onChange={() => setCategory("Stretching and Pilates")}
          value="Stretching and Pilates"
          control={<Radio />}
          label="Stretching and Pilates"
        />
        <FormControlLabel
          onChange={() => setCategory("Dance")}
          value="Dance"
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
        <FormControlLabel
          onChange={() => setCategory("Other")}
          value="Other"
          control={<Radio />}
          label="Other"
        />
      </RadioGroup>
    </FormControl>
  );
}
