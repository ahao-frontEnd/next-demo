type paramsType = { params: Promise<{ id: string }> }

export async function POST(request: Request, { params }: paramsType) {
  const { id } = await params;
  return Response.json({ errno: 0, data: { id } });
}