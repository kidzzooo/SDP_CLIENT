import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Toaster,toast } from 'sonner';
import Layout from '../roles/Layout';
const AddArticlePage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    author: '', // Added author field
    body: '',
    resourceUrl: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuillChange = (value) => {
    setFormData((prev) => ({ ...prev, body: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2021/api/contents', {
        ...formData,
        contentType: 'ARTICLE', // Set content type explicitly
      });
      if (response.status === 201 || response.status === 200) {
        toast.success('Article added successfully');
            setTimeout(() => {
                navigate('/admin/manage-content');
                }, 2000);
      }
    } catch (error) {
        toast.error('Error adding article:', error);
      console.error('Error adding article:', error);
    }
  };

  return (
    <Layout role="Admin">
    <div className="p-6 space-y-4">
        <Toaster richColors/>
      <h1 className="text-3xl font-bold text-gray-900">Add New Article</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter title"
            required
          />
        </div>
        <div>
          <Label htmlFor="author">Author</Label>
          <Input
            id="author"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
            placeholder="Enter author name"
            required
          />
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Enter description"
            required
          />
        </div>
        <div>
          <Label htmlFor="body">Body</Label>
          <ReactQuill value={formData.body} onChange={handleQuillChange} theme="snow" />
        </div>
        <div>
          <Label htmlFor="resourceUrl">Resource URL</Label>
          <Input
            id="resourceUrl"
            name="resourceUrl"
            value={formData.resourceUrl}
            onChange={handleInputChange}
            placeholder="Optional: Provide additional resource link"
          />
        </div>
        <Button type="submit" className="bg-green-600 hover:bg-green-700">Submit</Button>
      </form>
    </div>
    </Layout>
  );
};

export default AddArticlePage;
