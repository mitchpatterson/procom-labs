import { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import Axios from 'axios';

export interface Employee {
    id?: string,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    addresses: Address[],
};

export interface Address {
    streetName: string,
    postalCode: string,
    apartmentNumber: number,
    state: string,
    country: string,
};

export const useCreateEmployeeForm = (getEmployees: () => void) => {
    const url = 'https://procom-interview-employee-test.azurewebsites.net';
    const [addressCount, updateAddressCount] = useState<number>(1);
    const { register, handleSubmit, watch, formState: { errors }, control } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            addresses: [{
                streetName: '',
                postalCode: '',
                apartmentNumber: 0,
                state: '',
                country: '',
            }]
        }
    });
    const { fields, append } = useFieldArray({
        control,
        name: 'addresses'
    });

    const firstName = watch('firstName');
    const lastName = watch('lastName');
    const phoneNumber = watch('phoneNumber');
    const addresses = watch('addresses');
    const email = watch('email');

    const onSubmit = () => {
        const employee: Employee = {
            firstName,
            lastName,
            phoneNumber,
            email,
            addresses
        };

        Axios.post(`${url}/Employee`, employee).then(() => {
            console.log('successfully added employee!');
            getEmployees();
        }).catch((error) => {
            console.log('error', error);
        });
    };

    return {
        onSubmit,
        register,
        handleSubmit,
        errors,
        addressCount,
        updateAddressCount,
        fields,
        append,
    };
};