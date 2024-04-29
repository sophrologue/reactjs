/* eslint-disable react/prop-types */
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function ReviewTable({ reviews }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead></TableHead>
        <TableBody>
          {reviews.map((review) => (
            <TableRow
              key={review.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell sx={{ fontSize: "15px" }} component="th" scope="row">
                <div className="flex flex-col gap-1">
                  <p className="font-[500]"> {review.name}</p>
                  <p className="text-[#777]"> {review.date}</p>
                </div>
              </TableCell>
              <TableCell align=""> {review.rating}</TableCell>
              <TableCell align=""></TableCell>
              <TableCell align="" sx={{ fontSize: "16px" }}>
                {review.comment}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
