import { FC } from 'react';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const statusBackgroundMap = {
  active: '#dcf0e5',
  pending: '#ebd282',
  cancel: '#f4c7cc',
};

const statusColorMap = {
  active: '#63a480',
  pending: '#897c4c',
  cancel: '#6c2a3f',
};

const statusIconsMap = {
  active: (
    <RadioButtonCheckedIcon
      sx={{ color: statusColorMap.active }}
    />
  ),
  pending: (
    <PendingActionsIcon
      sx={{ color: statusColorMap.pending }}
    />
  ),
  cancel: (
    <HighlightOffIcon
      sx={{ color: statusColorMap.cancel }}
    />
  ),
};

type StatusChipProps = {
  value: 'active' | 'pending' | 'cancel';
};

const StatusChip: FC<StatusChipProps> = ({ value }) => (
  <Box
    display="flex"
    alignItems="center"
    gap={1}
    width={100}
    height={30}
    sx={{
      backgroundColor: statusBackgroundMap[value],
      borderRadius: 2,
      padding: 0.5,
      cursor: 'pointer'
    }}
  >
    {statusIconsMap[value]}
    <Typography
      sx={{
        color: statusColorMap[value],
        textTransform: 'capitalize',
      }}
    >
      {value}
    </Typography>
  </Box>
);

export default StatusChip;