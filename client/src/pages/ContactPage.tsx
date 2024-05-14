import React, { Component } from "react";

interface ContactPageState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

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
      <div>
        <div style={{ float: "left", marginRight: "20px" }}>
          <h2>어디사니</h2>
          <p>서울특별시 성북구.</p>
          <p>asdfsafa@Aadsfasdfasfd.com</p>
        </div>
        <div style={{ float: "left" }}>
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
        </div>
        <div style={{ clear: "both" }} />
      </div>
    );
  }
}

export default ContactPage;
