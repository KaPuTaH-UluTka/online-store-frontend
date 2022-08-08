import { MenuProps, Select, SelectProps, styled } from '@mui/material';
import { mainDarkGrey, mainWhite, mainYellow } from '../../utils/themes';

export const StyledSelect = styled(Select)<SelectProps>(({ theme }) => ({
  color: mainWhite,
  '.MuiSelect-icon': {
    color: mainWhite,
  },
  '&:before': {
    borderColor: mainWhite,
  },
  '&:not(.Mui-disabled):hover::before': {
    borderColor: mainYellow,
  },
}));

export const styledSelectProps: Partial<MenuProps> = {
  PaperProps: {
    sx: {
      bgcolor: mainDarkGrey,
      '& .MuiMenuItem-root': {
        color: mainWhite,
      },
    },
  },
};
