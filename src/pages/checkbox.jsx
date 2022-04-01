import React, { useState } from "react";
import {
  Page,
  Card,
  Navbar,
  Box,
  Checkbox,
  List,
  ListItem,
  Button,
  Text,
  zmp,
} from "zmp-framework/react";

const fruitsData = [
  {
    name: "Apple",
    id: "1",
  },
  {
    name: "Grapes",
    id: "2",
  },
  {
    name: "Pear",
    id: "3",
  },
];

const moviesData = [
  {
    name: "Movie 1",
    id: "1",
  },
  {
    name: "Movie 2",
    id: "2",
  },
  {
    name: "Movie 3",
    id: "3",
  },
  {
    name: "Movie 4",
    id: "4",
  },
];

export default () => {
  const [fruits, setFruits] = useState([]);
  const [movies, setMovies] = useState([]);

  const handleOnFruitChange = (e) => {
    const { checked, value } = e.target;
    const _fruits = [...fruits];
    if (checked) {
      if (_fruits.indexOf(value) < 0) {
        _fruits.push(value);
      }
    } else {
      _fruits.splice(_fruits.indexOf(value), 1);
    }
    setFruits([..._fruits]);
  };

  const handleOnFruitsChange = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setFruits(fruitsData.map((i) => i.id));
    } else {
      setFruits([]);
    }
  };

  const handleOnMovieChange = (e) => {
    const { checked, value } = e.target;
    const _movies = [...movies];
    if (checked) {
      if (_movies.indexOf(value) < 0) {
        _movies.push(value);
      }
    } else {
      _movies.splice(_movies.indexOf(value), 1);
    }
    setMovies([..._movies]);
  };

  const handleOnMoviesChange = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setMovies(moviesData.map((i) => i.id));
    } else {
      setMovies([]);
    }
  };

  const handleOnSubmitForm = (e) => {
    e.preventDefault();
    const data = zmp.form.convertToData("#my-form");
    console.log(data);
  };

  return (
    <Page className="page-checkbox page-with-navbar">
      <Box>
        <Card inset title="Form Checkbox">
          <List noHairlines form id="my-form" onSubmit={handleOnSubmitForm}>
            <Box>
              <Text size="small" className="text-color-nl500">
                Hobbies
              </Text>
              <Box>
                <Checkbox name="hobbies" label="reading" value="Reading" />
              </Box>
              <Box>
                <Checkbox name="hobbies" value="cycling" label="Cycling" />
              </Box>
              <Box>
                <Checkbox name="hobbies" value="cooking" label="Cooking" />
              </Box>
              <Box>
                <Checkbox name="hobbies" value="gardening" label="Gardening" />
              </Box>
            </Box>
            {/* actions */}
            <Box>
              <Button type="submit" typeName="secondary" responsive>
                Subbmit
              </Button>
            </Box>
          </List>
        </Card>
      </Box>
      <Box>
        <Card inset title="Controlled checkbox">
          <Box>
            <Checkbox
              label="All"
              name="all"
              onChange={handleOnMoviesChange}
              checked={movies.length === moviesData.length}
              indeterminate={
                movies.length > 0 && movies.length < moviesData.length
              }
            ></Checkbox>
            <div style={{ marginLeft: "8px" }}>
              {moviesData.map((m) => (
                <Box key={m.id}>
                  <Checkbox
                    checkbox
                    label={m.name}
                    name={m.id}
                    value={m.id}
                    checked={movies.indexOf(m.id) >= 0}
                    onChange={handleOnMovieChange}
                  />
                </Box>
              ))}
            </div>
          </Box>
        </Card>
      </Box>
      <Box>
        <Card inset title="ListItem Checkbox">
          <List>
            <ListItem
              checkbox
              title="Fruits"
              name="all"
              onChange={handleOnFruitsChange}
              checked={fruits.length === fruitsData.length}
              indeterminate={
                fruits.length > 0 && fruits.length < fruitsData.length
              }
            >
              <ul slot="root">
                {fruitsData.map((fruit) => (
                  <ListItem
                    key={fruit.id}
                    checkbox
                    title={fruit.name}
                    name={fruit.id}
                    value={fruit.id}
                    checked={fruits.indexOf(fruit.id) >= 0}
                    onChange={handleOnFruitChange}
                  />
                ))}
              </ul>
            </ListItem>
          </List>
        </Card>
      </Box>
    </Page>
  );
};
