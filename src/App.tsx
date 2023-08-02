import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { useEmployeeData } from './Hooks/GetEmployees.hook';
import { EmployeesTable } from './Components/EmployeesTable/EmployeesTable';
import { CreateEmployeeForm } from './Components/CreateEmployeeForm/CreateEmployeeForm';
import { EditEmployeeFormModal } from './Components/EditEmployeeFormModal/EditEmployeeFormModal';
import { Employee } from './Hooks/CreateEmployeeForm.hook';

function App() {
  const { employees, getEmployees, deleteEmployee } = useEmployeeData();

  const [employeeToEdit, updateEmployeeToEdit] = useState<Employee | null>(null);

  return (
    <div className="App">
      <CreateEmployeeForm
        getEmployees={getEmployees} />
      <EmployeesTable
        employees={employees}
        updateEmployeeToEdit={updateEmployeeToEdit}
        deleteEmployee={deleteEmployee} />
      {!!employeeToEdit && (
        <EditEmployeeFormModal
          open={!!employeeToEdit}
          onClose={() => updateEmployeeToEdit(null)}
          employee={employeeToEdit ?? {} as Employee}
          getEmployees={getEmployees} />
      )}
    </div>
  );
}

export default App;
