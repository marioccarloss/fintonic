import { Layout } from "components/templates/Layout";
import { Container } from "components/atoms/Container";
import { Typography } from "../atoms/Typography";

export default function ErrorPage() {
  return (
    <Layout>
      <Container>
        <Typography mode="title" align="center">
          404
        </Typography>
        <Typography mode="body" align="center">
          Page not found
        </Typography>
      </Container>
    </Layout>
  );
}
