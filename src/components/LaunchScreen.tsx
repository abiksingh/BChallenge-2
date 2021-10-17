import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllLaunches, getLaunchById } from '../redux/actions/launchActions';
import Spinner from '../UIHelpers/spinner';
import Header from '../UIHelpers/header';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, TextField, Container } from '@mui/material';
import moment from 'moment';
import { InputFieldWrapper } from '../UIHelpers/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const LaunchScreen = () => {
  const dispatch = useDispatch();

  const getAllSpaceLaunches = useSelector(
    (state: any) => state.getAllSpaceLaunches
  );
  const { loading, allLaunch } = getAllSpaceLaunches;

  console.log(allLaunch);

  const getSpaceLaunchById = useSelector(
    (state: any) => state.getSpaceLaunchById
  );
  const { loading: LaunchLoading, launchById, error } = getSpaceLaunchById;

  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  useEffect(() => {
    dispatch(getAllLaunches());
  }, [dispatch]);

  const [id, setId] = useState('');
  console.log(id);
  console.log(launchById);

  const onClickHandler = () => {
    dispatch(getLaunchById(id));
  };

  //   const [counter, setCounter] = useState('');

  //   useEffect(() => {
  //     const timer = setInterval(
  //       () =>
  //         setCounter(moment.utc(launchById?.date_utc).local().format('HH:mm:ss')),
  //       1000
  //     );
  //     return () => clearInterval(timer);
  //   }, [counter]);

  return (
    <>
      <Header />
      <Container>
        <InputFieldWrapper matches={matches}>
          <TextField
            onChange={(e: any) => setId(e.target.value)}
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

        <Typography variant="h5" component="div">
          Past Launches
        </Typography>

        <Grid container spacing={{ xs: 2, md: 2 }}>
          {loading ? (
            <Spinner />
          ) : (
            allLaunch?.map((launch: any) => (
              <Grid
                container
                direction="column"
                alignItems="center"
                display="flex"
                key={launch.id}
                item
                lg={4}
                md={6}
                sm={12}
                xs={12}
                // sx={albumStyle}
              >
                <Card sx={{ width: '100%' }} variant="outlined">
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {launch.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
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
