import React, { Component } from "react";
import styled from "styled-components";

interface ContactPageState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  margin-right: 20px;

  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 5px;
  }
`;

const FormContainer = styled.div`
  flex: 2;

  h1 {
    font-size: 32px;
    margin-bottom: 20px;
  }

  form {
    div {
      margin-bottom: 15px;

      label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
      }

      input,
      textarea {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
      }

      button {
        padding: 10px 20px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;

        &:hover {
          background-color: #0056b3;
        }
      }
    }
  }
`;

class ContactPage extends Component<{}, ContactPageState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  }

  handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<
      ContactPageState,
      keyof ContactPageState
    >);
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, email, subject, message } = this.state;
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);
  };

  render() {
    return (
      <ContactContainer>
        <InfoContainer>
          <h2>어디사니</h2>
          <p>서울특별시 성북구.</p>
          <p>asdfsafa@Aadsfasdfasfd.com</p>
        </InfoContainer>
        <FormContainer>
          <h1>Contact Me</h1>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
            <div>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
            <div>
              <label>
                Subject:
                <input
                  type="text"
                  name="subject"
                  value={this.state.subject}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
            <div>
              <label>
                Message:
                <textarea
                  name="message"
                  value={this.state.message}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
            <div>
              <button type="submit">Send</button>
            </div>
          </form>
        </FormContainer>
      </ContactContainer>
    );
  }
}

export default ContactPage;
