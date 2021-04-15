import { GetServerSideProps, GetServerSidePropsResult } from "next";
import Doc from "../../components/Document/Document";

interface DocumentPageProps {
  data: {
    documentContent: string;
  };
}

export default function DocumentPage({ data }: DocumentPageProps): JSX.Element {
  return <Doc />;
}

export function getServerSideProps(): GetServerSidePropsResult<DocumentPageProps> {
  const data = { documentContent: "what" };
  return {
    props: { data },
  };
}
