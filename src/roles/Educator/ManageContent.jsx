import { useState } from 'react';
import Layout from '../Layout';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { PlusCircle, Pencil, Trash2 } from 'lucide-react';

const EducatorManageContent = () => {
  const [contents, setContents] = useState([
    { id: 1, title: 'Introduction to Indian Constitution', author: 'John Doe', type: 'ARTICLE' },
    { id: 2, title: 'Fundamental Rights Explained', author: 'Jane Smith', type: 'VIDEO' },
    { id: 3, title: 'Test Your Knowledge: Indian Polity', author: 'Alex Johnson', type: 'QUIZ' },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({ title: '', description: '', contentType: '', resourceUrl: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    setIsDialogOpen(false);
    setFormData({ title: '', description: '', contentType: '', resourceUrl: '' });
  };

  return (
    <Layout role='Educator'>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">Manage Content</h1>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-green-600 hover:bg-green-700">
              <PlusCircle className="mr-2 h-4 w-4" /> Add New Content
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Content</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter title"
                  required
                  minLength={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Enter description"
                  required
                  minLength={10}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contentType">Content Type</Label>
                <Select name="contentType" onValueChange={(value) => setFormData(prev => ({ ...prev, contentType: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select content type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ARTICLE">Article</SelectItem>
                    <SelectItem value="VIDEO">Video</SelectItem>
                    <SelectItem value="QUIZ">Quiz</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="resourceUrl">Resource URL</Label>
                <Input
                  id="resourceUrl"
                  name="resourceUrl"
                  value={formData.resourceUrl}
                  onChange={handleInputChange}
                  placeholder="https://example.com"
                  type="url"
                />
              </div>
              <Button type="submit" className="bg-green-600 hover:bg-green-700">Submit</Button>
            </form>
          </DialogContent>
        </Dialog>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contents.map((content) => (
                <TableRow key={content.id}>
                  <TableCell>{content.title}</TableCell>
                  <TableCell>{content.author}</TableCell>
                  <TableCell>{content.type}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon" className="text-blue-600 hover:text-blue-800">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-red-600 hover:text-red-800">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Layout>
  );
};

export default EducatorManageContent;