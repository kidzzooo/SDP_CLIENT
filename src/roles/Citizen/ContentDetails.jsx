import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../Layout";
import baseurl from "@/config";

// Helper function to transform YouTube URLs to embed format
const getYouTubeEmbedUrl = (url) => {
  const urlPattern =
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/;
  const shortUrlPattern =
    /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([a-zA-Z0-9_-]+)/;

  const match = url.match(urlPattern) || url.match(shortUrlPattern);
  if (match && match[1]) {
    return `https://www.youtube.com/embed/${match[1]}`;
  }
  return url; // Return the original URL if it doesn't match YouTube patterns
};

const ContentDetails = () => {
  const { id } = useParams(); // Get the content ID from the URL
  const [content, setContent] = useState(null); // Content data
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContentDetails = async () => {
      try {
        const response = await axios.get(
          `${baseurl}/api/contents/${id}`
        );
        setContent(response.data);
        setLoading(false);
      } catch (error) {
        console.error(`Error fetching content with id ${id}:`, error);
        setLoading(false);
      }
    };
    fetchContentDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!content) return <div>Content not found</div>;

  return (
    <Layout role="Citizen">
      <div className="p-6 space-y-4">
        <h1 className="text-3xl font-bold">{content.title}</h1>
        <p className="text-gray-600">{content.description}</p>

        {content.contentType === "ARTICLE" && (
          <div
            dangerouslySetInnerHTML={{ __html: content.body }}
            className="prose"
          />
        )}

        {content.contentType === "VIDEO" && content.resourceUrl && (
          <div className="w-full">
            <iframe
              src={getYouTubeEmbedUrl(content.resourceUrl)} // Transform the URL here
              title={content.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full"
              style={{ height: "600px" }} // Custom height
            ></iframe>
          </div>
        )}

        {content.contentType === "QUIZ" && <p>Quiz Content Coming Soon...</p>}
      </div>
    </Layout>
  );
};

export default ContentDetails;
