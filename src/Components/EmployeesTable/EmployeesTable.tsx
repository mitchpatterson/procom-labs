import React from 'react';
import { Table, TableContainer, TableHead, TableBody, TableCell, TableRow, Paper, Button } from '@mui/material';
import { Employee } from '../../Hooks/CreateEmployeeForm.hook';

interface Props {
    employees: Employee[],
    updateEmployeeToEdit: (employee: Employee) => void,
    deleteEmployee: (employeeId: string) => void,
};

export const EmployeesTable = ({
    employees,
    updateEmployeeToEdit,
    deleteEmployee,
}: Props) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell size='small'></TableCell>
                    <TableCell size='small'></TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {employees.map((employee: Employee) => (
                        <TableRow
                        key={employee.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {`${employee?.firstName} ${employee?.lastName}`}
                            </TableCell>
                            <TableCell>{employee.email}</TableCell>
                            <TableCell>{employee.phoneNumber}</TableCell>
                            <TableCell size='small'>
                                <Button onClick={() => updateEmployeeToEdit(employee)}>
                                    Edit
                                </Button>
                            </TableCell>
                            <TableCell size='small'>
                                <Button color='error' onClick={() => deleteEmployee(employee?.id ?? '')}>
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};