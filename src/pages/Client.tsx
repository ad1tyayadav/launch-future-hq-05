import React from 'react';
import { useParams } from 'react-router-dom';
import { testimonials } from '@/data/testimonials';

const ClientPage = () => {
  const { name } = useParams();

  const client = testimonials.find(t =>
    t.name.toLowerCase().replace(/\s+/g, '-') === name
  );

  if (!client) return <div className="text-white p-10">Client not found.</div>;

  return (
    <div className="min-h-screen p-10 text-white bg-black font-sora">
      <h1 className="text-3xl font-bold mb-4">{client.name}</h1>
      <p className="text-cyber-blue">{client.role} @ {client.company}</p>
      <img src={client.image} alt={client.name} className="w-32 h-32 rounded-full mt-6" />
      <p className="mt-6 text-lg">“{client.content}”</p>
      <p className="mt-4 text-sm text-cyber-purple">Project: {client.project}</p>
    </div>
  );
};

export default ClientPage;
