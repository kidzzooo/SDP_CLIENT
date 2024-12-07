import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../Layout";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil, Trash2 } from "lucide-react";
import baseurl from "@/config";

const ManageContent = () => {
  const [selectedType, setSelectedType] = useState("");
  const [contents, setContents] = useState([]); // State to store content
  const navigate = useNavigate();

  // Fetch content logic
  const fetchContents = async () => {
    try {
      const response = await axios.get(`${baseurl}/api/contents`);
      if (Array.isArray(response.data)) {
        setContents(response.data);
      } else {
        console.error("Expected an array but received:", response.data);
        setContents([]);
      }
    } catch (error) {
      console.error("Error fetching contents:", error);
      setContents([]); // Gracefully handle errors
    }
  };

  useEffect(() => {
    fetchContents(); // Fetch contents on component mount
  }, []);

  const handleNavigate = () => {
    if (selectedType) {
      navigate(`/add-content/${selectedType.toLowerCase()}`);
    } else {
      alert("Please select a content type.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseurl}/api/contents/${id}`);
      setContents((prev) => prev.filter((content) => content.id !== id));
    } catch (error) {
      console.error(`Error deleting content with id ${id}:`, error);
    }
  };

  return (
    <Layout role="Admin">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">Manage Content</h1>
        <div className="flex items-center space-x-4">
          <Select onValueChange={(value) => setSelectedType(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select Content Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ARTICLE">Article</SelectItem>
              <SelectItem value="VIDEO">Video</SelectItem>
              <SelectItem value="QUIZ">Quiz</SelectItem>
            </SelectContent>
          </Select>
          <Button
            onClick={handleNavigate}
            className="bg-green-600 hover:bg-green-700"
          >
            Add New Content
          </Button>
        </div>
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
                <TableCell>{content.contentType}</TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDelete(content.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Layout>
  );
};

export default ManageContent;
