import axios from "axios";

export const contact = ({
  name,
  email,
  subject,
  message,
  fields,
  recipient_email,
}) => {
  if (name && email && message && subject) {
    axios
      // .post("http://localhost:8080/attijara/contact", {
      .post(" http://sagebackend-207c01373df4.herokuapp.com/attijara/contact", {
        name,
        email,
        subject,
        message,
        fields,
        recipient_email,
      })
      .then(() => alert("Message Sent successfully"))
      .catch((err) => {
        console.log(err);

        alert("Ooops...failed");
      });
  } else return alert("Fill all fields");
};
