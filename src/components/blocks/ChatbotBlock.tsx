'use client';

import { useId, useRef, useState, type FormEvent } from 'react';
import {
  Avatar,
  AvatarFallback,
  Button,
  FloatingButton,
  StatusTag,
  TextInput,
  useDga,
} from '@dev-dga/react';
import { useCopy } from '@/lib/i18n';
import { ChatIcon, CloseIcon, HeadsetIcon, SendIcon } from './block-icons';

type Message = { from: string; text: string };

export function ChatbotBlock() {
  const { c } = useCopy();
  const t = c.blocks.chatbot;
  const { mode } = useDga();
  const id = useId();
  const [open, setOpen] = useState(true);
  const [sent, setSent] = useState<Message[]>([]);
  const [draft, setDraft] = useState('');
  const fabRef = useRef<HTMLButtonElement>(null);

  const messages: Message[] = [...t.messages, ...sent];

  const send = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setSent((cur) => [...cur, { from: 'user', text }, { from: 'bot', text: t.reply }]);
    setDraft('');
  };

  const close = () => {
    setOpen(false);
    fabRef.current?.focus();
  };

  return (
    <div className="block-chat">
      {open && (
        <section id={`${id}-window`} className="block-chat__window" aria-labelledby={`${id}-title`}>
          <header className="block-chat__header">
            <div className="block-chat__who">
              <Avatar size="md" className="block-chat__avatar">
                <AvatarFallback>
                  <HeadsetIcon size={28} />
                </AvatarFallback>
              </Avatar>
              <div className="block-chat__info">
                <h2 id={`${id}-title`} className="block-chat__title">
                  {t.title}
                </h2>
                <StatusTag
                  tone="success"
                  size="sm"
                  status={mode === 'dark' ? 'inverted' : 'subtle'}
                >
                  {t.status}
                </StatusTag>
              </div>
            </div>
            <Button variant="ghost" onColor size="icon-md" aria-label={t.close} onClick={close}>
              <CloseIcon size={20} />
            </Button>
          </header>

          <p className="block-chat__time">{t.timestamp}</p>

          <div className="block-chat__log" role="log" aria-live="polite" aria-label={t.log}>
            {messages.map((m, i) => (
              <p key={i} className="block-chat__bubble" data-from={m.from}>
                {m.text}
              </p>
            ))}
          </div>

          <form className="block-chat__compose" onSubmit={send}>
            <div className="block-chat__input">
              <TextInput
                size="md"
                variant="filled-darker"
                aria-label={t.placeholder}
                placeholder={t.placeholder}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                autoComplete="off"
              />
            </div>
            <Button type="submit" size="icon-md" aria-label={t.send}>
              <SendIcon size={20} className="block-chat__send" />
            </Button>
          </form>
        </section>
      )}

      <FloatingButton
        ref={fabRef}
        size="sm"
        icon={<ChatIcon />}
        aria-label={t.open}
        aria-expanded={open}
        aria-controls={open ? `${id}-window` : undefined}
        onClick={() => setOpen((v) => !v)}
        className="block-chat__fab"
      />
    </div>
  );
}

export const chatbotCode = `import { useState } from 'react';
import { Avatar, AvatarFallback, Button, FloatingButton, StatusTag, TextInput } from '@dev-dga/react';

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello, I’m your support assistant. How can I help you today?' },
  ]);
  const [draft, setDraft] = useState('');

  return (
    <div className="chat">
      {open && (
        <section id="chat-window" className="chat__window" aria-labelledby="chat-title">
          <header className="chat__header">
            <Avatar size="md"><AvatarFallback><HeadsetIcon /></AvatarFallback></Avatar>
            <h2 id="chat-title">Help and support</h2>
            <StatusTag tone="success" size="sm">Online</StatusTag>
            <Button variant="ghost" onColor size="icon-md" aria-label="Close the chat" onClick={() => setOpen(false)}>
              <CloseIcon />
            </Button>
          </header>
          <div role="log" aria-live="polite" aria-label="Conversation">
            {messages.map((m, i) => <p key={i} data-from={m.from}>{m.text}</p>)}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!draft.trim()) return;
              setMessages([...messages, { from: 'user', text: draft }]);
              setDraft('');
            }}
          >
            <TextInput size="md" variant="filled-darker" aria-label="Message" placeholder="Message"
              value={draft} onChange={(e) => setDraft(e.target.value)} />
            <Button type="submit" size="icon-md" aria-label="Send"><SendIcon /></Button>
          </form>
        </section>
      )}
      <FloatingButton size="sm" icon={<ChatIcon />} aria-label="Open the support chat"
        aria-expanded={open} aria-controls="chat-window" onClick={() => setOpen(!open)} />
    </div>
  );
}

/* chat.css: DGA Chatbot. Bubbles are 8px-radius with one square corner on the sender's side.
.chat__window { inline-size: 330px; border-radius: var(--ddga-radius-lg); box-shadow: var(--ddga-shadow-md); overflow: hidden; }
.chat__header { background: var(--ddga-color-primary); padding: var(--ddga-space-4); }
[data-from] { max-inline-size: 191px; padding: var(--ddga-space-2); border-radius: var(--ddga-radius-md); font-size: var(--ddga-font-size-xs); }
[data-from='bot'] { background: var(--ddga-gray-200); border-end-start-radius: 0; }
[data-from='user'] { align-self: end; background: var(--ddga-color-primary); color: var(--ddga-color-primary-foreground); border-end-end-radius: 0; }
*/`;
