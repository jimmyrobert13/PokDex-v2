'use client';
import React from 'react';
import { Box, Pagination as MuiPagination } from '@mui/material';

interface PaginationProps {
  page: number;
  count: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const Pagination = ({ page, count, onChange }: PaginationProps) => {
  return (
    <Box display="flex" justifyContent="center" mt={2}>
      <MuiPagination count={count} page={page} onChange={onChange} color="primary" />
    </Box>
  );
};

export default Pagination;
