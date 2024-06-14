import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../../asset/styles/contact.scss';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();

  const formRef = useRef(null);

  const [inputs, setInputs] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);

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
        res => {
          alert('메일을 성공적으로 보냈습니다. 3일 내에 회신 드리겠습니다.');
          if (nameRef.current && emailRef.current && textRef.current) {
            nameRef.current.value = '';
            emailRef.current.value = '';
            textRef.current.value = '';
          }
          navigate('/');
        },
        rej => {
          alert(rej.text);
        },
      );
    }
  };
  return (
    <section className="Contact-container">
      <div className="Contact-Box">
        <div className="Contact-titleBox">
          <div className="Contact-title">
            <h1>Contact</h1>
          </div>

          <div className="Contact-subTxt">
            <h2>
              웹 개발에 열정을 가진, <br />
              신입 프론트엔드 개발자 임민혁입니다.
            </h2>
            <p>
              최신 트렌드를 이해하고 시도해보려는 열정
              <br />
              공부한 기술을 응용하여 결과물을 만드는 응용력
              <br />
              위 역량들로 경력을 쌓아가며 실무에 기여하고 싶습니다.
              <br />
              해당 개발자에게 관심 혹은 궁금한 점이 있으시다면
              <br />
              Contact 정보와 함께 메시지를 남겨주시면
              <br />
              3일 이내 회신드리겠습니다.
              <br />
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
            <input
              type="text"
              name="user_name"
              placeholder="이름을 입력해주세요."
              onChange={e => InputChange(e)}
              ref={nameRef}
            />
          </div>

          <div className="Email-Field">
            <h2>email</h2>
            <input
              type="email"
              name="user_email"
              placeholder="이메일을 입력해주세요."
              onChange={e => InputChange(e)}
              ref={emailRef}
            />
          </div>

          <div className="Message-Field">
            <h2>Message</h2>
            <textarea name="message" onChange={e => TextChange(e)} ref={textRef} />
          </div>
          <input type="submit" value="Send Content" className="submit-button" />
        </form>
      </div>
    </section>
  );
}

export default Contact;
