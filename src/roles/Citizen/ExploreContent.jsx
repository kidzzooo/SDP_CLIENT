import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from '../Layout';
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen, Video, FileQuestion } from 'lucide-react';

const ExploreContent = () => {
  const [contents, setContents] = useState([]); // Fetch data from backend
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('ALL'); // Default to "ALL"
  const navigate = useNavigate();

  // Fetch contents from the backend
  const fetchContents = async () => {
    try {
      const response = await axios.get('http://localhost:2021/api/contents');
      if (Array.isArray(response.data)) {
        setContents(response.data);
      } else {
        console.error('Expected an array but received:', response.data);
        setContents([]);
      }
    } catch (error) {
      console.error('Error fetching contents:', error);
      setContents([]);
    }
  };

  useEffect(() => {
    fetchContents();
  }, []);

  const filteredContents = contents.filter(content =>
    content.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedType === 'ALL' || content.contentType === selectedType)
  );

  const getIcon = (type) => {
    switch (type) {
      case 'ARTICLE':
        return <BookOpen className="h-6 w-6" />;
      case 'VIDEO':
        return <Video className="h-6 w-6" />;
      case 'QUIZ':
        return <FileQuestion className="h-6 w-6" />;
      default:
        return null;
    }
  };

  // Navigate to content details page
  const handleCardClick = (id) => {
    navigate(`/content/${id}`);
  };

  return (
    <Layout role="Citizen">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">Explore Content</h1>

        <div className="flex space-x-4">
          <Input
            placeholder="Search content..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow"
          />
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">All Types</SelectItem>
              <SelectItem value="ARTICLE">Article</SelectItem>
              <SelectItem value="VIDEO">Video</SelectItem>
              <SelectItem value="QUIZ">Quiz</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContents.map((content) => (
            <Card
              key={content.id}
              onClick={() => handleCardClick(content.id)}
              className="hover:shadow-lg transition-shadow duration-200 cursor-pointer"
            >
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="p-3 rounded-full bg-orange-100 text-orange-600 mr-4">
                    {getIcon(content.contentType)}
                  </div>
                  {content.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Type: {content.contentType}</p>
                <p className="text-sm text-gray-600">Author: {content.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ExploreContent;
