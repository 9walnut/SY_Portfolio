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
`;

const FormContainer = styled.div`
  flex: 2;
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
