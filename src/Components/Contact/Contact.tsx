import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../../asset/styles/contact.scss';

function Contact() {
  const formRef = useRef(null);

  const [inputs, setInputs] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const InputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const afterInputs = { ...inputs, [name]: value };
    setInputs(afterInputs);
  };

  const TextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const afterInputs = { ...inputs, [name]: value };
    setInputs(afterInputs);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputs.user_name === '') {
      alert('이름을 입력해주세요.');
      return;
    }
    if (inputs.user_email === '') {
      alert('이메일을 입력해주세요.');
      return;
    }
    if (inputs.message === '') {
      alert('메시지를 입력해주세요.');
      return;
    }

    if (formRef.current && inputs.user_name !== '' && inputs.user_email !== '' && inputs.message !== '') {
      emailjs.sendForm('service_k0hnyfp', 'template_5a2kqd9', formRef.current, 'UhbB3PcGFHDMDqlgt').then(
        result => {
          alert(`메일을 성공적으로 보냈습니다. [Post Status : ${result.text}]`);
          window.location.replace('/');
        },
        error => {
          alert(error.text);
        },
      );
    }
  };
  return (
    <div className="Contact-container">
      <div className="Contact-Box">
        <div className="Contact-titleBox">
          <div className="Contact-title">
            <h2>Contact</h2>
          </div>

          <div className="Contact-subTxt">
            <p>
              신입 포트폴리오 사이트를 방문해주셔서 감사합니다.
              <br /> 저에게 궁금하신 점이나 피드백들을 적어주시면 3일 이내 회신드리겠습니다.
            </p>
          </div>

          <div className="Contact-info">
            <h3>E-mail : kim461577@gmail.com</h3>
            <h3>Phone : 010 6343 4615</h3>
          </div>
        </div>

        <form className="Contact-Form" ref={formRef} onSubmit={sendEmail}>
          <div className="Name-Field">
            <h2>Name</h2>
            <input type="text" name="user_name" placeholder="이름을 입력해주세요." onChange={e => InputChange(e)} />
          </div>

          <div className="Email-Field">
            <h2>email</h2>
            <input type="email" name="user_email" placeholder="이메일을 입력해주세요." onChange={e => InputChange(e)} />
          </div>

          <div className="Message-Field">
            <h2>Message</h2>
            <textarea name="message" onChange={e => TextChange(e)} />
          </div>
          <input type="submit" value="Send Content" className="submit-button" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
