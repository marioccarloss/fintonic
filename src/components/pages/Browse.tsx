import { Layout } from "components/templates/Layout";
import { Container } from "components/atoms/Container";
import { Table } from "components/organisms/Table";
import { useQuestion } from "hooks/useQuestion";
import { useStaticDataMock } from "hooks/useStaticDataMock";
import { Typography } from "../atoms/Typography";

export default function Browse() {
  const { dataUpdated } = useQuestion({
    amount: 100,
    category: undefined,
    difficulty: undefined,
    type: undefined,
  });

  const { tableHeading } = useStaticDataMock();

  return (
    <Layout>
      <Container>
        <Typography mode="title">Browse Questions</Typography>
        <Table data={dataUpdated} columns={tableHeading} pagination />
      </Container>
    </Layout>
  );
}
