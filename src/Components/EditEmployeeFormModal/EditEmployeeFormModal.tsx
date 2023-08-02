import { Modal, Button, TextField, Box, Typography } from '@mui/material';

import { Employee, Address } from '../../Hooks/CreateEmployeeForm.hook';
import { useEditEmployeeForm } from '../../Hooks/EditEmployeeForm.hook';

interface Props {
    open: boolean,
    onClose: () => void,
    employee: Employee,
    getEmployees: () => void,
};

export const EditEmployeeFormModal = ({
    open,
    onClose,
    employee,
    getEmployees,
}: Props) => {
    const { append, fields, register, handleSubmit, onSubmit } = useEditEmployeeForm({employee, getEmployees, onClose});
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                backgroundColor: 'rgb(255, 255, 255)',
                border: '2px solid rgb(0, 0, 0)',
                boxShadow: 'rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px',
                padding: '32px'
                }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {`Edit address for ${employee?.firstName} ${employee?.lastName}`}
                    </Typography>
                    <div style={{padding: '30px 0'}}>
                        {fields.map((field, index) => (
                            <div key={`address form fields #${index}`}>
                                <TextField key={field.id} {...register(`addresses.${index}.streetName`, {required: true})} id="address-street-name" label="Street Name" variant="standard" />
                                <TextField key={field.id} {...register(`addresses.${index}.postalCode`, {required: true})} id="address-postal-code" label="Postal Code" variant="standard" />
                                <TextField key={field.id} {...register(`addresses.${index}.apartmentNumber`, {required: true, valueAsNumber: true})} id="address-apartment-number" label="Apartment Number" variant="standard" />
                                <TextField key={field.id} {...register(`addresses.${index}.state`, {required: true})} id="address-state" label="State" variant="standard" />
                                <TextField key={field.id} {...register(`addresses.${index}.country`, {required: true})} id="address-country" label="Country" variant="standard" />
                            </div>
                        ))}
                    </div>
                    <Button variant='outlined' onClick={() => append({
                        streetName: '',
                        postalCode: '',
                        apartmentNumber: 0,
                        state: '',
                        country: '',
                    } as Address)}>Add another address</Button>
                    <Button style={{marginLeft: '5px'}} variant='contained' type='submit'>Update Employee Address</Button>
                </form>
            </Box>
        </Modal>
    );
};