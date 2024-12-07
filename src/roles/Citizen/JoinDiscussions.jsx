import { useState } from 'react';
import Layout from '../Layout';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, User } from 'lucide-react';

const JoinDiscussions = () => {
  const [discussions, setDiscussions] = useState([
    { id: 1, title: 'Fundamental Rights: Are they truly fundamental?', author: 'John Doe', replies: 15 },
    { id: 2, title: 'The role of Directive Principles in modern India', author: 'Jane Smith', replies: 8 },
    { id: 3, title: 'Debating recent constitutional amendments', author: 'Alex Johnson', replies: 23 },
    { id: 4, title: 'Federalism in India: Challenges and opportunities', author: 'Sarah Williams', replies: 12 },
    { id: 5, title: 'The importance of Preamble in interpreting the Constitution', author: 'Michael Brown', replies: 7 },
    { id: 6, title: 'Judicial activism: Boon or bane?', author: 'Emily Davis', replies: 19 },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredDiscussions = discussions.filter(discussion => 
    discussion.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">Join Discussions</h1>

        <div className="flex space-x-4">
          <Input
            placeholder="Search discussions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow"
          />
          <Button className="bg-green-600 hover:bg-green-700">
            Start New Discussion
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredDiscussions.map((discussion) => (
            <Card key={discussion.id} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="h-6 w-6 mr-2 text-orange-600" />
                  {discussion.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <User className="h-4 w-4 mr-1" />
                  <span>{discussion.author}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  <span>{discussion.replies} replies</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default JoinDiscussions;