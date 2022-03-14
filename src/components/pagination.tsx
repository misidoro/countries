import { Pagination as MuiPagination, Box } from '@mui/material';
import { calculateNumberOfPages } from 'utils/pagination';

export interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export default function Pagination({ totalItems, itemsPerPage, currentPage, handlePageChange }: PaginationProps) {
  return (
    <Box component='div' sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
      <MuiPagination
        page={currentPage}
        count={calculateNumberOfPages(totalItems, itemsPerPage)}
        onChange={handlePageChange}
      />
    </Box>
  );
}
