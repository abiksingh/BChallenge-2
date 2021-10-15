import React, { useEffect } from 'react';
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

  return (
    <>
      <Header />
      {loading ? (
        <Spinner />
      ) : (
        allLaunch?.map((launch: any) => (
          <Box key={launch.id} sx={{ minWidth: 275 }}>
            <Card variant="outlined">
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                  benevolent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Box>
        ))
      )}
    </>
  );
};

export default LaunchScreen;
