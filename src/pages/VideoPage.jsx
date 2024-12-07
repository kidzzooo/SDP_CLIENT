import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Layout from '../roles/Layout';
import axios from 'axios';
import { Toaster,toast } from 'sonner';
const AddVideoPage = () => {
  const [formData, setFormData] = useState({ title: '', description: '', videoUrl: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2021/api/contents', {
        title: formData.title,
        description: formData.description,
        resourceUrl: formData.videoUrl, // Ensure this mapping
        contentType: 'VIDEO',
      });
      if (response.status === 201 || response.status === 200) {
        toast.success('Video added successfully');
        setTimeout(() => {
          navigate('/admin/manage-content');
        }, 2000);
      }
    } catch (error) {
      toast.error('Error adding video');
      console.error('Error adding video:', error);
    }
  };
  

  return (
    <Layout role = "Admin">
      <Toaster richColors/>
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold text-gray-900">Add New Video</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input id="title" name="title" value={formData.title} onChange={handleInputChange} required />
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Input id="description" name="description" value={formData.description} onChange={handleInputChange} required />
        </div>
        <div>
          <Label htmlFor="videoUrl">Video URL</Label>
          <Input id="videoUrl" name="videoUrl" value={formData.videoUrl} onChange={handleInputChange} required />
        </div>
        <Button type="submit" className="bg-green-600 hover:bg-green-700">Submit</Button>
      </form>
    </div>
    </Layout>
  );
};

export default AddVideoPage;
