'use client';

import emailjs from '@emailjs/browser';
import { useRef, useState, type FormEvent } from 'react';
import styled from 'styled-components';
import { Button } from '@/shared/ui';
import { EMAILJS } from '../config';

type Status = { kind: 'idle' } | { kind: 'sending' } | { kind: 'sent' } | { kind: 'error'; message: string };

const FIELD_LABEL: Record<string, string> = {
  user_name: '이름',
  user_email: '이메일',
  message: '메시지',
};

/**
 * 메일 문의 폼. 필드 name(user_name, user_email, message)은 EmailJS 템플릿 변수와 맞물려 있으므로 바꾸지 않는다.
 * 결과는 alert 대신 폼 아래 상태 줄(role=status)로 알린다.
 */
export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>({ kind: 'idle' });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = formRef.current;
    if (!form) return;

    // 빈 칸이 있으면 첫 번째 빈 칸으로 포커스를 옮기고 무엇이 빠졌는지 알린다.
    const firstInvalid = form.querySelector<HTMLInputElement | HTMLTextAreaElement>(':invalid');
    if (firstInvalid) {
      firstInvalid.focus();
      const label = FIELD_LABEL[firstInvalid.name] ?? '입력값';
      setStatus({
        kind: 'error',
        message:
          firstInvalid.validity.typeMismatch ? `${label} 형식을 확인해 주세요.` : `${label}을(를) 입력해 주세요.`,
      });
      return;
    }

    setStatus({ kind: 'sending' });
    try {
      await emailjs.sendForm(EMAILJS.serviceId, EMAILJS.templateId, form, { publicKey: EMAILJS.publicKey });
      form.reset();
      setStatus({ kind: 'sent' });
    } catch (error) {
      const text = (error as { text?: string })?.text;
      setStatus({
        kind: 'error',
        message: `메일을 보내지 못했습니다${text ? ` (${text})` : ''}. 잠시 후 다시 시도하거나 메일 주소로 직접 보내 주세요.`,
      });
    }
  };

  const sending = status.kind === 'sending';

  return (
    <Form ref={formRef} onSubmit={onSubmit} noValidate aria-describedby="contact-status">
      <Field>
        <label htmlFor="contact-name">이름</label>
        <input id="contact-name" name="user_name" type="text" autoComplete="name" required />
      </Field>

      <Field>
        <label htmlFor="contact-email">이메일</label>
        <input id="contact-email" name="user_email" type="email" inputMode="email" autoComplete="email" required />
      </Field>

      <Field>
        <label htmlFor="contact-message">메시지</label>
        <textarea id="contact-message" name="message" rows={6} required />
      </Field>

      <Actions>
        <Button type="submit" $variant="primary" aria-busy={sending} disabled={sending}>
          {sending ? '보내는 중…' : '메시지 보내기'}
        </Button>
        <StatusLine id="contact-status" role="status" aria-live="polite" data-kind={status.kind}>
          {status.kind === 'sent' && '메시지를 보냈습니다. 3일 안에 회신드리겠습니다.'}
          {status.kind === 'error' && status.message}
        </StatusLine>
      </Actions>
    </Form>
  );
}

const Form = styled.form`
  display: grid;
  gap: var(--space-lg);
`;

const Field = styled.div`
  display: grid;
  gap: var(--space-xs);

  label {
    font-size: var(--text-sm);
    font-weight: 500;
    color: var(--color-muted);
  }

  input,
  textarea {
    width: 100%;
    min-height: 52px;
    padding: var(--space-sm) var(--space-md);
    background: var(--color-paper);
    border: var(--rule-hair) solid var(--color-muted);
    border-radius: var(--radius-card);
    color: var(--color-ink);
    font-size: var(--text-md);
    transition: background-color var(--dur-short) var(--ease-out);
  }

  textarea {
    resize: vertical;
    line-height: 1.6;
  }

  input:hover,
  textarea:hover {
    background: var(--color-paper-2);
  }

  input:focus-visible,
  textarea:focus-visible {
    outline-offset: -2px;
  }

  /* 사용자가 한 번 입력·제출한 뒤에만 오류 테두리를 보인다 */
  input:user-invalid,
  textarea:user-invalid {
    border-color: var(--color-error);
  }
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-md) var(--space-lg);
`;

const StatusLine = styled.p`
  min-height: 1lh;
  font-size: var(--text-sm);
  color: var(--color-muted);

  &[data-kind='sent'] {
    color: var(--color-success);
  }

  &[data-kind='error'] {
    color: var(--color-error);
  }
`;
