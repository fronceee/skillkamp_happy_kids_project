import React from "react";

function Contacts() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setlastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isEmailValid, setIsEmailValid] = React.useState(true);

  const checkEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  const handleChange = (e, setState) => {
    setState(e.target.vale);
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    setIsEmailValid(checkEmail(email));
  };
  const inputStyle = "w-full";
  const allInputStyle =
    "border-b border-main-1 w-full focus:outline-none focus:border-b-4 transition-all duration-100";
  return (
    <div className="w-screen flex items-center flex-col text-main-1">
      <h1 className="text-3xl font-thin tracking-wider my-12">Contact Us</h1>
      <div className="flex flex-col md:flex-row gap-14 tracking-wider mb-12">
        <div className="text-center font-extralight text-main-1">
          <h2 className="uppercase text-xl mb-6">Visit Us</h2>
          <p className="text-normal">
            500 Terry Francois St.
            <br />
            San Francisco,
            <br />
            CA 94158 123-456-7890
          </p>
        </div>
        <div className="text-center font-extralight text-main-1">
          <h2 className="uppercase text-xl mb-6">OPENING HOURS</h2>
          <p className="text-lg">
            Mon - Fri: 7am - 10pm
            <br />
            ​​Saturday: 8am - 10pm
            <br />
            ​Sunday: 8am - 11pm
          </p>
        </div>
        <div className="text-center font-extralight text-main-1">
          <h2 className="uppercase text-xl mb-6">Customer Service</h2>
          <p className="text-lg">
            1-800-000-000
            <br />
            123-456-7890
            <br />
            <a href="mailto:info@mysite.com">info@mysite.com</a>
          </p>
        </div>
      </div>
      <form
        className="flex flex-col border-box items-center gap-4 mx-10"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thank you for contacting us!");
          setFirstName("");
          setlastName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setIsEmailValid(true);
        }}
      >
        <h1 className="text-center text-lg md:text-2xl font-thin tracking-widest">
          FOR ANY QUESTIONS, PLEASE SEND US A MESSAGE
        </h1>
        <div className="w-full flex flex-col gap-4 md:flex-row">
          <div className={`${inputStyle}`}>
            <label
              htmlFor="fName"
              className="text-normal font-light tracking-wide"
            >
              First Name
            </label>
            <br />
            <input
              value={firstName}
              onChange={(e) => handleChange(e, setFirstName)}
              className={`${allInputStyle}`}
              name="fName"
              type="text"
            />
          </div>
          <div className={`${inputStyle}`}>
            <label
              htmlFor="lName"
              className="text-normal font-light tracking-wide"
            >
              Last Name
            </label>
            <br />
            <input
              value={lastName}
              onChange={(e) => handleChange(e, setlastName)}
              className={`${allInputStyle}`}
              name="lName"
              type="text"
            />
          </div>
        </div>

        <div className={inputStyle}>
          <label
            htmlFor="email"
            className="text-normal font-light tracking-wide"
          >
            Email *
          </label>
          <br />
          <input
            className={`${allInputStyle} ${
              isEmailValid
                ? "border-main-1 border-b"
                : "border-main-3 border-b-4"
            }`}
            name="email"
            type="email"
            value={email}
            onClick={() => setIsEmailValid(checkEmail(email))}
            onChange={(e) => {
              handleEmailChange(e);
            }}
            required
          />
        </div>
        <div className={inputStyle}>
          <label
            htmlFor="subject"
            className="text-normal font-light tracking-wide"
          >
            Subject
          </label>
          <br />
          <input
            name="subject"
            value={subject}
            onChange={(e) => handleChange(e, setSubject)}
            className={`${allInputStyle}`}
          />
        </div>
        <div className={inputStyle}>
          <label htmlFor="message" className="text-lg font-light tracking-wide">
            Message
          </label>
          <br />
          <textarea
            value={message}
            onChange={(e) => handleChange(e, setMessage)}
            className={`${allInputStyle} h-40 md:h-54`}
          ></textarea>
        </div>
        <input
          type="submit"
          className="h-16 text-lg text-main-1 hover:text-main-3 cursor-pointer transition-colors duration-200"
        />
      </form>
    </div>
  );
}

export default Contacts;
