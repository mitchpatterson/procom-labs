import { useForm, useFieldArray } from 'react-hook-form';
import Axios from 'axios';

import { Employee } from './CreateEmployeeForm.hook';

export const useEditEmployeeForm = ({
    employee,
    getEmployees,
    onClose,
}: {
    employee: Employee,
    getEmployees: () => void,
    onClose: () => void,
}) => {
    const url = 'https://procom-interview-employee-test.azurewebsites.net';
    const { register, handleSubmit, watch, formState: { errors }, control } = useForm({
        defaultValues: {...employee}
    });
    const { fields, append } = useFieldArray({
        control,
        name: 'addresses'
    });

    const addresses = watch('addresses');

    const onSubmit = () => {
        const updatedEmployee: Employee = {
            ...employee,
            addresses
        };


        Axios.put(`${url}/Employee/${employee.id}`, updatedEmployee).then(() => {
            console.log('successfully added employee!');
            getEmployees();
            onClose();
        }).catch((error) => {
            console.log('error', error);
        });
    };

    return {
        fields,
        append,
        register,
        handleSubmit,
        errors,
        onSubmit,
    };
};