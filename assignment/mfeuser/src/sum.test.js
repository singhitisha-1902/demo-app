import React from 'react';
import { render, screen, fireEvent, getByLabelText,waitFor,debug, getByTestId} from '@testing-library/react';
import '@testing-library/jest-dom';
import UserManagement from './components/UserManagement';

describe('User Management page', () => {
  test('renders UserManagement component', () => {
    const { getByText } = render(<UserManagement />);
    const titleElement = getByText(/User Management/i);
    expect(titleElement).toBeInTheDocument();
  });
  
  test('test case', () => {
    const { getByText, getByTestId } = render(<UserManagement />); 
    // expect(screen.getByText('First Name:')).toHaveLength(4);
    expect(getByTestId('second')).toBeInTheDocument();
    expect(getByText('User Management')).toBeInTheDocument();
    expect(getByText('Add User')).toBeInTheDocument();
  
    // expect(getByLabelText('Last Name:')).toBeInTheDocument();
    // expect(getByLabelText('Email:')).toBeInTheDocument();
  });
})

  // test('renders UserManagement component', () => {
  //   const { getByText, getByLabelText } = render(<UserManagement />);
    
  //   expect(getByText('User Management')).toBeInTheDocument();
  //   expect(getByText('Add User')).toBeInTheDocument();
  //   expect(getByLabelText('First Name:')).toBeInTheDocument();
  //   expect(getByLabelText('Last Name:')).toBeInTheDocument();
  //   expect(getByLabelText('Email:')).toBeInTheDocument();
  // });


// Mocked users data
const mockedUsers = [
  { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' },
  { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@example.com' },
];

  it('renders the table with existing users and add user button', () => {
    render(<UserManagement />);
    
    // Check if the table is rendered with existing users
    mockedUsers.forEach(user => {
      expect(screen.getByText(user.firstName)).toBeInTheDocument();
      expect(screen.getByText(user.lastName)).toBeInTheDocument();
      expect(screen.getByText(user.email)).toBeInTheDocument();
    });
    
    // Check if the "Add User" button is rendered
    expect(screen.getByText('Add User')).toBeInTheDocument();
  });

// // //   // it('displays the add user form when "Add User" button is clicked', () => {
// // //   //   render(<UserManagement />);
    
// // //   //   // Click the "Add User" button
// // //   //   fireEvent.click(screen.getByText('Add User'));
    
// // //   //   // Check if the add user form is rendered
// // //   //   expect(screen.getByLabelText('First Name:')).toBeInTheDocument();
// // //   //   expect(screen.getByLabelText('Last Name:')).toBeInTheDocument();
// // //   //   expect(screen.getByLabelText('Email:')).toBeInTheDocument();
// // //   //   expect(screen.getByText('Save')).toBeInTheDocument();
// // //   //   expect(screen.getByText('Cancel')).toBeInTheDocument();
// // //   // });
// // import React from 'react';
// // import { render, fireEvent } from '@testing-library/react';



// //   test('renders the UserManagement component', () => {
// //     const { getByText } = render(<UserManagement />);
// //     const headingElement = getByText(/User Management/i);
// //     expect(headingElement).toBeInTheDocument();
// //   });

// //   test('displays existing users in a table', () => {
// //     const users = [
// //       { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' },
// //       { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@example.com' },
// //     ];
// //     const { getByText } = render(<UserManagement />);
// //     users.forEach(user => {
// //       const firstNameElement = getByText(user.firstName);
// //       const lastNameElement = getByText(user.lastName);
// //       const emailElement = getByText(user.email);
// //       expect(firstNameElement).toBeInTheDocument();
// //       expect(lastNameElement).toBeInTheDocument();
// //       expect(emailElement).toBeInTheDocument();
// //     });
// //   });

// //   test('allows adding a new user', () => {
// //     const { getByText, getByLabelText } = render(<UserManagement />);
// //     const addUserButton = getByText('Add User');
// //     fireEvent.click(addUserButton);

// //     const firstNameInput = getByLabelText('First Name:');
// //     const lastNameInput = getByLabelText('Last Name:');
// //     const emailInput = getByLabelText('Email:');
// //     const saveButton = getByText('Save');

// //     fireEvent.change(firstNameInput, { target: { value: 'New' } });
// //     fireEvent.change(lastNameInput, { target: { value: 'User' } });
// //     fireEvent.change(emailInput, { target: { value: 'new.user@example.com' } });

// //     fireEvent.click(saveButton);

// //     const newFirstNameElement = getByText('New');
// //     const newLastNameElement = getByText('User');
// //     const newEmailElement = getByText('new.user@example.com');
// //     expect(newFirstNameElement).toBeInTheDocument();
// //     expect(newLastNameElement).toBeInTheDocument();
// //     expect(newEmailElement).toBeInTheDocument();
// //   });

// //   // Add more test cases for editing and deleting users if needed




// // import React from 'react';
// // import { render, fireEvent } from '@testing-library/react';

// // // Mock users data
// // const mockUsers = [
// //   { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' },
// //   { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@example.com' },
// // ];

// // // Mock functions for props
// // const mockHandleSaveNewUser = jest.fn();
// // const mockHandleCancelNewUser = jest.fn();
// // const mockHandleEdit = jest.fn();
// // const mockHandleSave = jest.fn();
// // const mockHandleCancelEdit = jest.fn();
// // const mockHandleDelete = jest.fn();

// // describe('UserManagement', () => {
// //   test('renders the UserManagement component', () => {
// //     const { getByText } = render(
// //       <UserManagement
// //         onSaveNewUser={mockHandleSaveNewUser}
// //         onCancelNewUser={mockHandleCancelNewUser}
// //         onEdit={mockHandleEdit}
// //         onSave={mockHandleSave}
// //         onCancelEdit={mockHandleCancelEdit}
// //         onDelete={mockHandleDelete}
// //         users={mockUsers}
// //       />
// //     );
// //     const headingElement = getByText(/User Management/i);
// //     expect(headingElement).toBeInTheDocument();
// //   });

// //   // Other test cases using mock functions for props
// // });







// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';


// // Mock users data
// const mockUsers = [
//   { "id": 1, "firstName": "John", "lastName": "Doe", "email": "john.doe@example.com"},
//   { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@example.com' },
// ];

// // Mock functions for props
// const mockHandleSaveNewUser = jest.fn();
// const mockHandleCancelNewUser = jest.fn();
// const mockHandleEdit = jest.fn();
// const mockHandleSave = jest.fn();
// const mockHandleCancelEdit = jest.fn();
// const mockHandleDelete = jest.fn();


//   test('renders the UserManagement component', () => {
//     const { getByText } = render(
//       <UserManagement
//         onSaveNewUser={mockHandleSaveNewUser}
//         onCancelNewUser={mockHandleCancelNewUser}
//         onEdit={mockHandleEdit}
//         onSave={mockHandleSave}
//         onCancelEdit={mockHandleCancelEdit}
//         onDelete={mockHandleDelete}
//         users={mockUsers}
//       />
//     );
//     const headingElement = getByText(/User Management/i);
//     expect(headingElement).toBeInTheDocument();
//   });

//   test('displays existing users in a table', () => {
//     const { getByText } = render(
//       <UserManagement
//         onSaveNewUser={mockHandleSaveNewUser}
//         onCancelNewUser={mockHandleCancelNewUser}
//         onEdit={mockHandleEdit}
//         onSave={mockHandleSave}
//         onCancelEdit={mockHandleCancelEdit}
//         onDelete={mockHandleDelete}
//         users={mockUsers}
//       />
//     );
//     mockUsers.forEach(user => {
//       const firstNameElement = getByText(user.firstName);
//       const lastNameElement = getByText(user.lastName);
//       const emailElement = getByText(user.email);
//       expect(firstNameElement).toBeInTheDocument();
//       expect(lastNameElement).toBeInTheDocument();
//       expect(emailElement).toBeInTheDocument();
//     });
//   });

//   test('allows adding a new user', () => {
//     const { getByText, getByLabelText } = render(
//       <UserManagement
//         onSaveNewUser={mockHandleSaveNewUser}
//         onCancelNewUser={mockHandleCancelNewUser}
//         onEdit={mockHandleEdit}
//         onSave={mockHandleSave}
//         onCancelEdit={mockHandleCancelEdit}
//         onDelete={mockHandleDelete}
//         users={mockUsers}
//       />
//     );
//     const addUserButton = getByText('Add User');
//     fireEvent.click(addUserButton);

//     const firstNameInput = getByLabelText('First Name:');
//     const lastNameInput = getByLabelText('Last Name:');
//     const emailInput = getByLabelText('Email:');
//     const saveButton = getByText('Save');

//     fireEvent.change(firstNameInput, { target: { value: 'New' } });
//     fireEvent.change(lastNameInput, { target: { value: 'User' } });
//     fireEvent.change(emailInput, { target: { value: 'new.user@example.com' } });

//     fireEvent.click(saveButton);

//     const newFirstNameElement = getByText('New');
//     const newLastNameElement = getByText('User');
//     const newEmailElement = getByText('new.user@example.com');
//     expect(newFirstNameElement).toBeInTheDocument();
//     expect(newLastNameElement).toBeInTheDocument();
//     expect(newEmailElement).toBeInTheDocument();
//   });

//   test('allows editing a user', () => {
//     const { getByText, getByLabelText } = render(
//       <UserManagement
//         onSaveNewUser={mockHandleSaveNewUser}
//         onCancelNewUser={mockHandleCancelNewUser}
//         onEdit={mockHandleEdit}
//         onSave={mockHandleSave}
//         onCancelEdit={mockHandleCancelEdit}
//         onDelete={mockHandleDelete}
//         users={mockUsers}
//       />
//     );
//     const editButton = getByText('Edit');
//     fireEvent.click(editButton);

//     const firstNameInput = getByLabelText('First Name:');
//     const lastNameInput = getByLabelText('Last Name:');
//     const emailInput = getByLabelText('Email:');
//     const saveButton = getByText('Save');

//     fireEvent.change(firstNameInput, { target: { value: 'Edited' } });
//     fireEvent.change(emailInput, { target: { value: 'edited.user@example.com' } });

//     fireEvent.click(saveButton);

//     const editedFirstNameElement = getByText('Edited');
//     const editedEmailElement = getByText('edited.user@example.com');
//     expect(editedFirstNameElement).toBeInTheDocument();
//     expect(editedEmailElement).toBeInTheDocument();
//   });

//   test('allows deleting a user', () => {
//     const { getByText } = render(
//       <UserManagement
//         onSaveNewUser={mockHandleSaveNewUser}
//         onCancelNewUser={mockHandleCancelNewUser}
//         onEdit={mockHandleEdit}
//         onSave={mockHandleSave}
//         onCancelEdit={mockHandleCancelEdit}
//         onDelete={mockHandleDelete}
//         users={mockUsers}
//       />
//     );
//     const deleteButton = getByText('Delete');
//     fireEvent.click(deleteButton);

//     const deletedFirstNameElement = getByText('John');
//     const deletedEmailElement = getByText('john.doe@example.com');
//     expect(deletedFirstNameElement).not.toBeInTheDocument();
//     expect(deletedEmailElement).not.toBeInTheDocument();
//   });
// test("Example 1 renders successfully", () => {
//   render(<FirstTest/>);

//   const element = screen.getByText(/first test/i);

//   expect(element).toBeInTheDocument();
// })


 
  
 
  

