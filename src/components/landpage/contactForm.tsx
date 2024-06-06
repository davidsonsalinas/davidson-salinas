import { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.status === 200) {
      setStatus('Email enviado com sucesso!');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setStatus('Erro ao enviar o email.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <div className="space-y-1">
        <Label htmlFor="name">Nome</Label>
        <Input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Digite seu nome" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu email" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="message">Mensagem</Label>
        <Textarea id="message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Digite sua mensagem" />
      </div>
      <Button type="submit" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
        Enviar Mensagem
      </Button>
      {status && <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">{status}</p>}
    </form>
  );
}