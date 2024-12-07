import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Make API call with Axios
      const response = await axios.post('http://localhost:2021/api/users/login', {
        username,
        password,
      });

      // Store necessary details in sessionStorage
      sessionStorage.setItem('username', response.data.username);
      sessionStorage.setItem('role', response.data.role); // Assuming role is a field in User
      sessionStorage.setItem('userId', response.data.id); // Assuming id is a field in User

      // Redirect to the dashboard
      if(response.data.role === 'ADMIN') {
        navigate('/admin');
      }
      else if(response.data.role === 'EDUCATOR') {
        navigate('/educator');
      }
      else {
        navigate('/citizen');
      }
    } catch (error) {
      // Handle login error
      console.error('Login failed:', error.response ? error.response.data : error.message);
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Login to ConstitutionEDU</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Log In
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
