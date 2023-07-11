import React from 'react';
import { Box, useTheme } from '@mui/material';
import { useGetGeographyQuery } from 'state/api';
import Header from 'components/Header';
import { ResponsiveChoropleth } from '@nivo/geo';
import { geoData } from 'state/geoData';

function Geography() {
  const theme = useTheme();
  const { data, isLoading } = useGetGeographyQuery();
  console.log('Geography ~ data:', data);
  return <div>Geography</div>;
}

export default Geography;