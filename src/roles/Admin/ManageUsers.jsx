import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Layout from '../Layout';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import PropTypes from 'prop-types';
import { Toaster,toast } from 'sonner';
const fetchUsersByRole = async (role, setFunction) => {
  try {
    const response = await axios.get(`http://localhost:2021/api/users/role/${role}`);
    if (Array.isArray(response.data)) {
      setFunction(response.data);
    } else {
      console.error('Expected an array but received:', response.data);
      setFunction([]);
    }
  } catch (error) {
    console.error(`Error fetching users with role ${role}:`, error);
    setFunction([]);
  }
};

export default function ManageUsersPage() {
  const [educators, setEducators] = useState([]);
  const [citizens, setCitizens] = useState([]);
  const [newUser, setNewUser] = useState({ username: '', password: '', email: '' });
  const [currentRole, setCurrentRole] = useState('Educator'); // Track the active tab's role

  // Fetch educators and citizens on component mount
  useEffect(() => {
    fetchUsersByRole('Educator', setEducators);
    fetchUsersByRole('Citizen', setCitizens);
  }, []);

  // Handle user creation
  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      const requestData = { ...newUser, role: currentRole.toUpperCase() }; // Set role dynamically
      const response = await axios.post('http://localhost:2021/api/users', requestData);
      if (response.status === 200) {
        const createdUser = response.data;
        if (currentRole === 'Educator') {
          setEducators((prev) => [...prev, createdUser]);
        } else {
          setCitizens((prev) => [...prev, createdUser]);
        }
        toast.success('User created successfully');
        setNewUser({ username: '', password: '', email: '' }); // Reset form
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  // Handle user deletion
  const handleDeleteUser = async (id, role) => {
    try {
      const response = await axios.delete(`http://localhost:2021/api/users/${id}`);
      if(response.status === 200) {
        toast.info('User deleted successfully');
      }

      if (role === 'Educator') {
        setEducators((prev) => prev.filter((user) => user.id !== id));
      } else {
        setCitizens((prev) => prev.filter((user) => user.id !== id));
      }
    } catch (error) {
      console.error(`Error deleting user with ID ${id}:`, error);
    }
  };

  const UserTable = ({ users = [], role }) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Username</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.length > 0 ? (
          users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  className="mr-2"
                  onClick={() => alert('Edit functionality is not implemented yet')}
                >
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => handleDeleteUser(user.id, role)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={3} className="text-center">
              No users found
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );

  UserTable.propTypes = {
    users: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
      })
    ).isRequired,
    role: PropTypes.string.isRequired,
  };

  return (
    <Layout role="Admin">
      <Toaster richColors/>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Manage Users</h1>
        <Tabs
          defaultValue="educators"
          className="w-full"
          onValueChange={(value) => setCurrentRole(value === 'educators' ? 'Educator' : 'Citizen')} // Update role dynamically
        >
          <TabsList className="mb-4">
            <TabsTrigger value="educators">Manage Educators</TabsTrigger>
            <TabsTrigger value="citizens">Manage Citizens</TabsTrigger>
          </TabsList>
          <TabsContent value="educators">
            <h2 className="text-2xl font-semibold mb-4">Educators</h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="mb-4">Add New Educator</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Educator</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleCreateUser} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      value={newUser.username}
                      onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={newUser.password}
                      onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={newUser.email}
                      onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit">Create Educator</Button>
                </form>
              </DialogContent>
            </Dialog>
            <UserTable users={educators} role="Educator" />
          </TabsContent>
          <TabsContent value="citizens">
            <h2 className="text-2xl font-semibold mb-4">Citizens</h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="mb-4">Add New Citizen</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Citizen</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleCreateUser} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      value={newUser.username}
                      onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={newUser.password}
                      onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={newUser.email}
                      onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit">Create Citizen</Button>
                </form>
              </DialogContent>
            </Dialog>
            <UserTable users={citizens} role="Citizen" />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
