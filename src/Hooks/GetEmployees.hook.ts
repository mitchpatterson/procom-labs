import { useState, useEffect } from 'react';
import { useAsync } from 'react-async';
import Axios from 'axios';

import { getAllEmployees } from '../Api/employees';

export const useEmployeeData = () => {
    const url = 'https://procom-interview-employee-test.azurewebsites.net';
    const [employees, setEmployees] = useState<any[]>([]);

    const getEmployees = () => {
        Axios.get(`${url}/Employee`).then((response: any) => {
            setEmployees(response.data);
        }).catch((error) => {
            console.log('error', error);
        });
    };

    const deleteEmployee = (id: string) => {
        Axios.delete(`${url}/Employee/${id}`).then(() => {
            console.log("successfully deleted employee", id);
            getEmployees();
        }).catch((error) => {
            console.log('error', error);
        });
    };

    useEffect(() => {
        getEmployees();
    }, []);

    return {
        employees,
        getEmployees,
        deleteEmployee,
    };
};