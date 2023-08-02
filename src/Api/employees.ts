import Axios from 'axios';

const url = 'https://procom-interview-employee-test.azurewebsites.net';

export const getAllEmployees = async () => {
    console.log("running");
    try {
        console.log("test1");
        const response = await Axios.get(`${url}/Employee`);
        console.log("test2", response);
        return response;
    } catch (error) {
        console.log('Error!', error);
    }
};