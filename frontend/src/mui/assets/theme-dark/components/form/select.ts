/**
=========================================================
* Material Dashboard 2 PRO React TS - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-2-pro-react-ts
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 PRO React TS Base Styles
import colors from 'src/mui/assets/theme-dark/base/colors';

// Material Dashboard 2 PRO React TS Helper Functions
import pxToRem from 'src/mui/assets/theme-dark/functions/pxToRem';

const { transparent } = colors;

// types
type Types = any;

const select: Types = {
  styleOverrides: {
    select: {
      display: 'grid',
      alignItems: 'center',
      padding: `0 ${pxToRem(12)} !important`,

      '& .Mui-selected': {
        backgroundColor: transparent.main,
      },
    },

    selectMenu: {
      background: 'none',
      height: 'none',
      minHeight: 'none',
      overflow: 'unset',
    },

    icon: {
      display: 'none',
    },
  },
};

export default select;
