import React from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../UI/CommonSection/CommonSection";
import BlogList from "../../UI/BlogList/BlogList";



const Blogs = () => {
  return (
    <Helmet title="Blogs">
      <CommonSection title="Blogs" />
      <section>
        <Container>
          <Row>
            <BlogList />
            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Blogs;