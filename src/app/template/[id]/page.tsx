import ClientBtn from "./client-btn";

type TemplateDetailProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function TemplateDetail({ params }: TemplateDetailProps) {
  const { id } = await params;
  // load data from database or API using the id
  return (
    <div>
      <h1>template Post #{id}</h1>
      <p>This is a mock template post detail page for post ID {id}.</p>
      <ClientBtn id={id} />
    </div>
  );
}