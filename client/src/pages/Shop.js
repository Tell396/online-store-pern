import React from 'react';
import { Center, Grid, Wrap, WrapItem, Box, GridItem } from '@chakra-ui/react';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';

export default function Shop() {
  return (
    <div className="h-screen">
      <Grid h="200px" templateRows="repeat(2, 1fr)" templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem rowSpan={2} colSpan={1}>
          <TypeBar />
        </GridItem>

        <GridItem colSpan={2}>
          <BrandBar />
        </GridItem>
      </Grid>
    </div>
  );
}
