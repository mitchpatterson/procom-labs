import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

import { useCreateEmployeeForm, Address } from '../../Hooks/CreateEmployeeForm.hook';

interface Props {
    getEmployees: () => void;
};

export const CreateEmployeeForm = ({ getEmployees }: Props) => {
    const { register, handleSubmit, onSubmit, errors, fields, append } = useCreateEmployeeForm(getEmployees);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField {...register('firstName', {required: true})} error={!!errors?.firstName} id="first-name" label="First Name" variant="standard" />
            <TextField {...register('lastName', {required: true})} error={!!errors?.lastName} id="last-name" label="Last Name" variant="standard" />
            <TextField {...register('email', {required: true})} error={!!errors?.phoneNumber} id="email" label="Email" variant="standard" />
            <TextField {...register('phoneNumber', {required: true})} error={!!errors?.phoneNumber} id="phone-number" label="Phone Number" variant="standard" />
            {fields.map((field, index) => (
                <div key={`address form fields #${index}`}>
                    <TextField key={field.id} {...register(`addresses.${index}.streetName`, {required: true})} id="address-street-name" label="Street Name" variant="standard" />
                    <TextField key={field.id} {...register(`addresses.${index}.postalCode`, {required: true})} id="address-postal-code" label="Postal Code" variant="standard" />
                    <TextField key={field.id} {...register(`addresses.${index}.apartmentNumber`, {required: true, valueAsNumber: true})} id="address-apartment-number" label="Apartment Number" variant="standard" />
                    <TextField key={field.id} {...register(`addresses.${index}.state`, {required: true})} id="address-state" label="State" variant="standard" />
                    <TextField key={field.id} {...register(`addresses.${index}.country`, {required: true})} id="address-country" label="Country" variant="standard" />
                </div>
            ))}
            <Button onClick={() => append({
                streetName: '',
                postalCode: '',
                apartmentNumber: 0,
                state: '',
                country: '',
            } as Address)}>Add another address</Button>
            <Button type='submit'>Add Employee</Button>
        </form>
    );
};