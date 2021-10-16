import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllLaunches, getLaunchById } from '../redux/actions/launchActions';
import Spinner from '../UIHelpers/spinner';
import Header from '../UIHelpers/header';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, TextField } from '@mui/material';
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
  const { loading: LaunchLoading, launchById } = getSpaceLaunchById;

  useEffect(() => {
    dispatch(getAllLaunches());
  }, [dispatch]);

  const [id, setId] = useState('');
  console.log(id);
  console.log(launchById);

  const onClickHandler = () => {
    dispatch(getLaunchById(id));
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          width: 500,
          maxWidth: '100%',
        }}
      >
        <TextField
          onChange={(e: any) => setId(e.target.value)}
          fullWidth
          label="fullWidth"
          id="fullWidth"
        />
        <Button onClick={onClickHandler} variant="outlined">
          Contained
        </Button>
      </Box>

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
              <Card variant="outlined">
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
    </>
  );
};

export default LaunchScreen;
