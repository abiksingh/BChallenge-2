import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllLaunches, getLaunchById } from '../redux/actions/launchActions';
import Spinner from '../UIHelpers/spinner';
import Header from '../UIHelpers/header';

import {
  Grid,
  TextField,
  Container,
  Stack,
  Alert,
  Typography,
  Button,
  Card,
  CardContent,
} from '@mui/material';
import moment from 'moment';
import { InputFieldWrapper } from '../UIHelpers/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CircleIcon from '@mui/icons-material/Circle';

const LaunchScreen = () => {
  const dispatch = useDispatch();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const [id, setId] = useState('');

  type GetAllLaunch = {
    getAllSpaceLaunches: {
      allLaunch: any;
      loading: boolean;
    };
  };

  type GetLaunchById = {
    getSpaceLaunchById: {
      error: string;
      launchById: any;
    };
  };

  type Launches = {
    id: string;
    name: string;
  };

  const getAllSpaceLaunches = useSelector(
    (state: GetAllLaunch) => state.getAllSpaceLaunches
  );
  const { loading, allLaunch } = getAllSpaceLaunches;

  const getSpaceLaunchById = useSelector(
    (state: GetLaunchById) => state.getSpaceLaunchById
  );
  const { launchById, error } = getSpaceLaunchById;

  useEffect(() => {
    dispatch(getAllLaunches());
  }, [dispatch]);

  console.log(allLaunch);
  console.log(launchById);

  const onClickHandler = () => {
    if (id) {
      dispatch(getLaunchById(id));
    }
  };

  //   const [counter, setCounter] = useState('');

  //   useEffect(() => {
  //     const timer = setInterval(
  //       () =>
  //         setCounter(moment.utc(launchById?.date_utc).local().format('HH:mm:ss')),
  //       1000
  //     );
  //     return () => clearInterval(timer);
  //   }, [counter, launchById?.date_utc, id]);

  return (
    <>
      <Header />
      <Container>
        <InputFieldWrapper matches={matches}>
          <TextField
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setId(e.target.value)
            }
            label="Search..."
            placeholder="ID"
            sx={{ width: !matches ? '100%' : '50%' }}
          />
          <Button
            sx={{
              height: '3.5rem',
              marginLeft: matches ? '2rem' : 0,
              width: !matches ? '10rem' : '10rem',
              marginTop: !matches ? '1rem' : 0,
            }}
            color="info"
            onClick={onClickHandler}
            variant="outlined"
          >
            Submit
          </Button>
        </InputFieldWrapper>

        {launchById && (
          <>
            <Typography mt="2rem" variant="h5" component="div">
              Search Results
            </Typography>
            <Card
              sx={{ width: '100%', height: '15rem', mt: '1rem' }}
              variant="outlined"
            >
              <CardContent>
                <Grid
                  container
                  columnSpacing={{ xs: 0, sm: 5, md: 5, lg: 11 }}
                  rowSpacing={{ xs: 2, sm: 12, md: 14, lg: 15 }}
                >
                  <Grid item lg={11} md={10} sm={11} xs={12}>
                    <Typography variant="h5" component="div">
                      {launchById?.name}
                    </Typography>
                  </Grid>
                  <Grid item lg={1} md={2} sm={1} xs={12}>
                    <CircleIcon
                      sx={{
                        color:
                          launchById.success === true ? '#78EF9C' : '#F25858',
                      }}
                    />
                  </Grid>
                  <Grid item lg={9} md={9} sm={8} xs={12}>
                    <Typography sx={{ mb: 1.5 }}>
                      Elapsed Time Since Launch
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {/* {counter} */}
                    </Typography>
                  </Grid>
                  <Grid item lg={3} md={3} sm={4} xs={12}>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {launchById?.id}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </>
        )}

        {error && (
          <Stack sx={{ width: '100%', margin: '2rem 0' }} spacing={2}>
            <Alert variant="outlined" severity="error">
              Please input valid ID
            </Alert>
          </Stack>
        )}

        <Typography mt="2rem" variant="h5" component="div">
          Past Launches
        </Typography>

        <Grid container spacing={{ xs: 2, md: 2 }}>
          {loading ? (
            <Spinner />
          ) : (
            allLaunch?.map((launch: Launches) => (
              <Grid
                container
                direction="column"
                alignItems="center"
                display="flex"
                key={launch.id}
                sx={{ marginTop: '1rem' }}
                item
                lg={4}
                md={6}
                sm={12}
                xs={12}
              >
                <Card sx={{ width: '100%', height: '8rem' }} variant="outlined">
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {launch.name}
                    </Typography>
                    <Typography
                      sx={{ mb: 1.5, mt: 2.5 }}
                      color="text.secondary"
                    >
                      {launch.id}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </>
  );
};

export default LaunchScreen;
