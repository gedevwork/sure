import {
  TableContainer,
  Table as MuiTable,
  Paper,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  BoxProps,
  Box,
} from '@mui/material';

type TInfoTable = {
  header: string;
  rows: { key: string; value: string | number }[];
} & BoxProps;

function InfoTable({ header, rows, ...boxProps }: TInfoTable) {
  return (
    <Box {...boxProps}>
      <Typography variant="h5" textAlign="left" marginBottom="16px">
        {header}
      </Typography>
      <TableContainer component={Paper}>
        <MuiTable sx={{ minWidth: { sm: 650 } }} aria-label="table">
          <TableBody>
            {rows.map(({ key, value }) => (
              <TableRow key={key}>
                <TableCell>{key}</TableCell>
                <TableCell sx={{ whiteSpace: 'pre' }}>{value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </Box>
  );
}
export default InfoTable;
