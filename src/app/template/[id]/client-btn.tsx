'use client';

async function fetchApi(id: string) {
  const res = await fetch(`/api/template/client-btn/${id}`, {
    method: 'POST',
  });
  const data = await res.json();
  alert(JSON.stringify(data));
}

export default function ClientBtn({ id }: { id: string }) {
  return (
    <button onClick={() => fetchApi(id)}>client button component</button>
  )
}