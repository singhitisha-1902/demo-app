import React, { useState } from 'react';
import './AddUser.css';
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import {CDSTable} from "@ciscodesignsystems/cds-react-table";
import {CDSFlex} from "@ciscodesignsystems/cds-react-flex";
import {CDSTextInput} from "@ciscodesignsystems/cds-react-text-input"
import {CDSButton} from "@ciscodesignsystems/cds-react-button"
import {CDSContainer} from "@ciscodesignsystems/cds-react-container"
import {CDSText} from "@ciscodesignsystems/cds-react-text"

// Create a separate component for the form

const AddUserForm = ({ onSave, onCancel }) => {
  const [newUser, setNewUser] = useState({ firstName: '', lastName: '', email: '' });

  const handleInputChange = (field, value) => {
    setNewUser(prevNewUser => ({ ...prevNewUser, [field]: value }));
  };

  const handleSave = () => {
    onSave(newUser);
    setNewUser({ firstName: '', lastName: '', email: '' });
  };

  const handleCancel = () => {
    onCancel();
    setNewUser({ firstName: '', lastName: '', email: '' });
  };

  return(
    // <div className='tablediv'>
    <CDSFlex 
    justify="center"
    align="center"
    >
    <CDSContainer style={{marginTop:"30px"}}>
  
     <CDSFlex
            gap={20}
          direction="vertical"  
          align="center">
      <div className='adduser'>
      
        {/* <label   > First Name: </label> */}
        <CDSFlex   
         gap={20}
          direction="vertical"  
          align="flex-between"
          >
        <CDSTextInput
            type="text"
           label="First Name:"
           value={newUser.firstName}
           onChange={(e) => handleInputChange('firstName', e.target.value)}
                        />
        {/* <input
          type="text"
          value={newUser.firstName}
          onChange={(e) => handleInputChange('firstName', e.target.value)}
        /> */}
        <br />
        {/* <label>Last Name: </label> */}
        <CDSTextInput       
                   type="text"     
                    label="Last Name:"
                    value={newUser.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    />
        {/* <input
          type="text"
          value={newUser.lastName}
          onChange={(e) => handleInputChange('lastName', e.target.value)}
        /> */}
        <br />
        {/* <label>Email: </label> */}
        <CDSTextInput       
                   type="text"     
                    label="Email:"
                    value={newUser.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    />

        {/* <input
          type="text"
          value={newUser.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
        /> */}
        </CDSFlex>
        <br />
        <CDSFlex  gap={20}
          direction="horizontal"  
          right={10}
          style={{
            width: '300px'
        }} >
        <CDSButton
                       icon={null}
                     rightIcon={null}
                   
                     onClick={handleSave}
                      >
                    Save
                      </CDSButton>
        {/* <button className='save' >Save</button> */}
                      <CDSButton destructive 
                       onClick={handleCancel}>
                      Cancel
                    
                     </CDSButton>
                     </CDSFlex>
                      
                      
        {/* <button className='cancel' onClick={handleCancel}>Cancel</button> */}
      </div>
      </CDSFlex>
      
      </CDSContainer>
      </CDSFlex>
    // </div>
  );
};








const UserManagement = () => {
  const [users, setUsers] = useState([
 
     
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' },
    { id: 2, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' },
    { id: 3, firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@example.com' },

    
  ]);
  
  
  
  

  const [editingUserId, setEditingUserId] = useState(null);
  const [showAddUserForm, setShowAddUserForm] = useState(false);

  const handleEdit = (userId) => {
    setEditingUserId(userId);

  };

  const handleSave = (userId) => {
    setEditingUserId(null);

  };

  const handleCancelEdit = () => {
    setEditingUserId(null);
  };

  const handleDelete = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleInputChange = (userId, field, value) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === userId ? { ...user, [field]: value } : user
      )
    );
  };

  const handleSaveNewUser = (newUser) => {
    setUsers(prevUsers => [...prevUsers, { id: users.length + 1, ...newUser }]);
    setShowAddUserForm(false);
  };

  const handleCancelNewUser = () => {
    setShowAddUserForm(false);
  };

  const handleAddUser = () => {
    setShowAddUserForm(true);
  };
 

  return (
 <CDSContainer>

 
      {/* Conditionally render the form or the table based on the state */}
      {showAddUserForm ? (
        <AddUserForm onSave={handleSaveNewUser} onCancel={handleCancelNewUser} />
      ) : (    
      
        <div>
          <CDSButton
          style={{marginTop:"105px", marginRight:"5px"}}
          className='buttonadduser'
                       icon={null}
                     rightIcon={null}
                   
                     onClick={handleAddUser}
                      >
                   Add User
                      </CDSButton>
        
          <CDSFlex direction="horizontal"
          align="center"
          justify="center"
          >
             <CDSText>
        <CDSContainer style={{marginTop:"105px", marginLeft:"89px"}} >
       

        
  <CDSTable style={{marginLeft:"0px", marginTop:"0", border:"2px"}}
    columns={[
      {
        accessorKey: 'id',
        header: 'id',
        id: 'id',
        cell: function renderidCell(user){
          const id=user.row.original.id
          return editingUserId==id?
          (
            <CDSTextInput
            type="text"
            value={id}
            onChange={(e)=> handleInputChange(id,'id',e.target.value)}/>
          ):(
             id
          )
        },
        meta: {
          align: 'id',
 
        }
      },
      {
        accessorKey: 'firstName',
        header: 'First Name',
        id: 'firstName',  


        cell: function renderfirstNameCell(user){
          const id=user.row.original.id 
          console.log(editingUserId)
          const firstName=user.row.original.firstName
          return editingUserId==id?(
            <CDSTextInput       
                type="text" 
               
                 value={firstName}
                  onChange={(e) => handleInputChange(firstName, 'firstName', e.target.value)}
                />
               // <input
               //   type="text"
               //   value={user.firstName}
               //   onChange={(e) => handleInputChange(user.id, 'firstName', e.target.value)}
               // />
             ) : (
            
             firstName
             )},


        meta: {
          align: 'left',
          columnVisibilityFilterLabel: 'First Name'
        }

      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
        id: 'lastName',
        cell: function renderlastNameCell(user){
          const id=user.row.original.id 
          const lastName=user.row.original.lastName
          return editingUserId==id?(
            <CDSTextInput       
                type="text" 
                 value={lastName}
                  onChange={(e) => handleInputChange(lastName , 'Last Name', e.target.value)}
                />
               // <input
               //   type="text"
               //   value={user.firstName}
               //   onChange={(e) => handleInputChange(user.id, 'firstName', e.target.value)}
               // />
             ) : (
             lastName
             )
        },
        meta: {
          align: 'left',
          columnVisibilityFilterLabel: 'Last Name'
        }
      },
      { accessorKey: 'email',
        header: 'Email',
        id: 'email',
        cell: function renderEmailCell(user){
        const id=user.row.original.id 
      
        const email=user.row.original.email
        return editingUserId==id?(
          <CDSTextInput       
              type="text" 
               value={email}
                onChange={(e) => handleInputChange(email , 'Email', e.target.value)}
              />
             // <input
             //   type="text"
             //   value={user.firstName}
             //   onChange={(e) => handleInputChange(user.id, 'firstName', e.target.value)}
             // />
           ) : (
           email
           )


        
        },
        meta: {
          align: 'left',
          columnVisibilityFilterLabel: 'Email'
        }
      },
      {
       accessorKey: 'actions',
        header: 'Actions',
         id: 'actions',
          cell: (user)=> {
            
           const id= user.row.original.id 
                     
            return editingUserId ===id?(
            
            <div className='editbutton'>
              <button className='tablesave' onClick={() => handleSave(id)}>Save</button>
              <button className='tablecancel' onClick={handleCancelEdit}>Cancel</button>
            </div>
          ) : (
            <>
              <div>
                <AiFillEdit color='blue' size={18} onClick={() => handleEdit(id) } />
              </div>      
            </>
          )
      //  <div>

      //     <AiFillDelete className='del' color='red' size={18} onClick={()=>handleDelete(id)} />
      //     </div>
        

        },
        meta:{
          align: 'left',
          columnVisibilityFilterLabel: 'Actions'
        }
      },
    ]}
    
    data={users.map(user => ({
      id: editingUserId === user.id ? (
        <CDSText>
        <CDSTextInput       
          type="text" 
          
           value={user.id}
            onChange={(e) => handleInputChange(user.id , 'id', e.target.value)}
          />
          </CDSText>
         // <input
         //   type="text"
         //   value={user.firstName}
         //   onChange={(e) => handleInputChange(user.id, 'firstName', e.target.value)}
         // />
       ) : (
    

       
         user.id
      
       ),




      firstName: editingUserId === user.id ? (
       <CDSTextInput       
         type="text" 
          value={user.firstName}
           onChange={(e) => handleInputChange(user.id , 'firstName', e.target.value)}
         />
        // <input
        //   type="text"
        //   value={user.firstName}
        //   onChange={(e) => handleInputChange(user.id, 'firstName', e.target.value)}
        // />
      ) : (
        user.firstName
      ),
      lastName: editingUserId === user.id ? (
        <CDSTextInput       
        type="text"     
        value={user.lastName}
        onChange={(e) => handleInputChange(user.id, 'lastName', e.target.value)}
         />
        // <input
        //   type="text"
        //   value={user.lastName}
        //   onChange={(e) => handleInputChange(user.id, 'lastName', e.target.value)}
        // />
      ) : (
        user.lastName
      ),
      email: editingUserId === user.id ? (
        <CDSTextInput
          type="text"
          value={user.email}
          onChange={(e) => handleInputChange(user.id, 'email', e.target.value)}
        />
      ) : (
        user.email
      ),


    //  actions: 
    //   editingUserId === user.id ? (
    //     <>
    //       <div className='editbutton'>
    //         <button className='tablesave' onClick={() => handleSave(user.id)}>Save</button>
    //         <button className='tablecancel' onClick={handleCancelEdit}>Cancel</button>
    //       </div>
    //     </>
    //   ) : (
    //     <div>
    //       <AiFillEdit color='blue' size={18} onClick={() => handleEdit(user.id)} />
    //     </div>
    //   )
     

      
    }))}
     
    size="compact"
  />
  
   </CDSContainer>
   </CDSText>
   </CDSFlex>
          
          
          {/* <table data-testid="second">
            <thead>
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
   
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>
                    <label  >First Name: </label>
                    {editingUserId === user.id ? (

                      <input
                        type="text"

                        value={user.firstName}
                        onChange={(e) => handleInputChange(user.id, 'firstName', e.target.value)}
                      />
                    ) : (
                      user.firstName
                    )}
                  </td>
                  <td>
                    {editingUserId === user.id ? (
                      <input
                        type="text"
                        value={user.lastName}
                        onChange={(e) => handleInputChange(user.id, 'lastName', e.target.value)}
                      />
                    ) : (
                      user.lastName
                    )}
                  </td>
                  <td>
                    {editingUserId === user.id ? (
                      <input
                        type="text"
                        value={user.email}
                        onChange={(e) => handleInputChange(user.id, 'email', e.target.value)}
                      />
                    ) : (
                      user.email
                    )}
                  </td>
                  <td>
                    {editingUserId === user.id ? (
                      <>
                        <div className='editbutton'>
                          <button className='tablesave' onClick={() => handleSave(user.id)}>Save</button>
                          <button className='tablecancel' onClick={handleCancelEdit}>Cancel</button>
                        </div>
                      </>
                    ) : (
                      <div>
                        <AiFillEdit color='blue' size={18} onClick={() => handleEdit(user.id)} />
                      </div>
                    )}
                    <div>
                      <AiFillDelete className='del' color='red' size={18} onClick={() => handleDelete(user.id)} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}
        
        </div>
      )}
</CDSContainer>
  );
};

export default UserManagement;