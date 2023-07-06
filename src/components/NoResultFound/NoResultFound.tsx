import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NoResultFoundScr from '../../assets/no-result-found.png';

const NoResultFound = () => (
  <Box display="flex" flexDirection="column" gap={2}>
    <img src={NoResultFoundScr} width={400} height={225} />
    <Typography
      sx={{
        color: '#acacac'
      }}
    >
      No result found
    </Typography>
  </Box>
);

export default NoResultFound;