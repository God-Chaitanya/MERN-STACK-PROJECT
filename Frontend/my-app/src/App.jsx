import { StarFilled } from "@ant-design/icons";
import { Button, Card, Col, Form, Image, Input, Layout, Menu, Row, Space, Typography } from "antd";
import "antd/dist/reset.css";
import React, { useEffect, useState } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Importing custom fonts
import './App.css'; // Make sure to include your CSS for custom font

const { Title, Text } = Typography;
const { Header, Content } = Layout;

function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        color: "#333",
        padding: "100px 0",
        position: "relative",
        fontFamily: "'Poppins', sans-serif", // Custom font family
      }}
    >
      <Title
        level={1}
        style={{
          fontSize: "70px",
          fontWeight: "600",
          textTransform: "uppercase",
          letterSpacing: "3px",
          zIndex: 1,
          textShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        Welcome to Movie Hub
      </Title>
      <Text
        style={{
          fontSize: "22px",
          fontWeight: "300",
          display: "block",
          marginTop: "15px",
          zIndex: 1,
          letterSpacing: "1px",
          lineHeight: "1.5",
        }}
      >
        Discover the latest movies, trending stars, and exciting reviews.
      </Text>
      <Button
        type="primary"
        size="large"
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "30px",
          backgroundColor: "#ff0077",
          borderColor: "#ff0077",
          zIndex: 1,
        }}
      >
        Explore Movies
      </Button>
    </div>
  );
}

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch movies from the backend
    fetch("http://localhost:4000/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter movies based on the search query
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Input
        placeholder="Search movies..."
        value={searchQuery}
        onChange={handleSearch}
        style={{
          marginBottom: "20px",
          padding: "10px",
          width: "300px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      
      <Row gutter={[24, 24]} justify="center" style={{ marginTop: "40px" }}>
        {filteredMovies.map((movie) => (
          <Col xs={24} sm={12} md={8} lg={6} key={movie.id}>
            <Card
              hoverable
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
              }}
              bodyStyle={{
                padding: "15px",
                backgroundColor: "#fff",
              }}
              cover={
                <div style={{ position: "relative" }}>
                  <img
                    alt={movie.title}
                    src={movie.img}
                    style={{
                      height: "300px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                      color: "#fff",
                      padding: "5px 10px",
                      borderRadius: "5px",
                      fontSize: "12px",
                    }}
                  >
                    <StarFilled style={{ color: "#FFD700" }} /> {movie.rating}
                  </div>
                </div>
              }
            >
              <Title level={4} style={{ marginBottom: "10px", textAlign: "center" }}>
                {movie.title}
              </Title>
              <Text style={{ display: "block", marginBottom: "5px" }}>
                <strong>Actor:</strong> {movie.actor}
              </Text>
              <Text style={{ display: "block", marginBottom: "5px" }}>
                <strong>Actress:</strong> {movie.actress}
              </Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

function About() {
  return (
    <div style={{ padding: "50px 20px", backgroundColor: "#f0f2f5" }}>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={18} md={12} lg={8}>
          <Card
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              background: "linear-gradient(45deg, #ff6f61, #ffcc00)",
              color: "#fff",
            }}
            bordered={false}
            cover={
              <Image
                alt="About Image"
                src="data:image/jpeg;base64,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"
                style={{ borderRadius: "10px" }}
              />
            }
          >
            <Title level={2} style={{ color: "#fff", fontWeight: "600" }}>
              About Us
            </Title>
            <Text style={{ fontSize: "16px", lineHeight: "1.6" }}>
              Movie Hub is a place for movie enthusiasts to discover the latest films, trending stars, and exciting
              reviews. Our platform is designed to help you find your next favorite movie with ease. Join our community
              and explore the world of cinema!
            </Text>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

function Contact() {
  return (
    <div style={{ padding: "50px 20px", backgroundColor: "#f0f2f5" }}>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={20} md={16} lg={12}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <Title level={2}>Contact Us</Title>
            <Text style={{ fontSize: "16px", fontWeight: "300", lineHeight: "1.5" }}>
              Got questions? We're here to help! Reach out to us, and we'll get back to you as soon as possible.
            </Text>
          </div>
          <Form
            name="contact_form"
            onFinish={(values) => console.log("Form Submitted", values)}
            style={{
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input placeholder="Your Name" size="large" />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input placeholder="Your Email" size="large" />
            </Form.Item>

            <Form.Item
              name="message"
              rules={[{ required: true, message: "Please input your message!" }]}
            >
              <Input.TextArea placeholder="Your Message" size="large" rows={4} />
            </Form.Item>

            <Form.Item>
              <Space size="middle">
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                >
                  Send Message
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Col>
      </Row>

      <div
        style={{
          marginTop: "40px",
          padding: "20px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
        }}
      >
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12} md={8}>
            <Space size="middle" align="center">
              <Text style={{ fontSize: "30px", color: "#ff0077" }}>📞</Text>
              <Text style={{ fontSize: "18px" }}>+1 234 567 890</Text>
            </Space>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Space size="middle" align="center">
              <Text style={{ fontSize: "30px", color: "#ff0077" }}>📧</Text>
              <Text style={{ fontSize: "18px" }}>contact@moviehub.com</Text>
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        {/* Navbar */}
        <Header style={{ backgroundColor: "#001529" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Title level={3} style={{ color: "#fff", margin: "0" }}>
              Movie Hub
            </Title>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1">
                  <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/movies">Movies</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/about">About</Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to="/contact">Contact</Link>
                </Menu.Item>
              </Menu>
              <Input.Search
                placeholder="Search movies"
                onSearch={(value) => console.log(value)} // Handle search here
                style={{ width: 200, marginLeft: "20px" }}
              />
            </div>
          </div>
        </Header>

        {/* Content */}
        <Content style={{ padding: "20px", backgroundColor: "#f0f2f5" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
