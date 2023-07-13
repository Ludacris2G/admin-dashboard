import React from 'react';
import { Box, useTheme } from '@mui/material';
import { useGetAdminsQuery } from 'state/api';
import { DataGrid } from '@mui/x-data-grid';
import Header from 'components/Header';

function Admin() {
  const { data, isLoading } = useGetAdminsQuery();
  console.log('file: index.js:9 ~ Admin ~ data:', data);
  const theme = useTheme();
  return <div></div>;
}

export default Admin;
