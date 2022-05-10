import styles from "../styles/EventForm.module.css";
import FormRow from "./FormRow";
import FormRowTextArea from "./FormRowTextArea";
import FormRowDatePicker from "./FormRowDatePicker";
import { ModalMessage } from "./";
import { useState } from "react";
import axios from "axios";

const initialValues = {
  eventName: "",
  eventDate: "",
  contactPerson: "",
  contactNumber: "",
  contactEmail: "",
  eventDescription: "",
};

const EventForm = () => {
  const [values, setValues] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);
  const [displayMsg, setDisplayMsg] = useState({
    type: "",
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    setValues((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const closeModal = () => {
    setDisplayModal(false);
  };

  const createEvent = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post("/api/events", {
        ...values,
        createdBy: "6271d7754917378eb6043828",
      });
      setDisplayMsg((prev) => ({
        ...prev,
        type: "success",
        title: data.msg,
        content: "Thank you!! We will get in touch with you",
      }));
      clearForm();
    } catch (error) {
      // console.log(error.response.data);
      setDisplayMsg((prev) => ({
        ...prev,
        type: "error",
        title: "Error creating event",
        content: `${error.response.data.errMsg}`,
      }));
    }

    setDisplayModal(true);
    setIsLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { eventDate, contactPerson, contactEmail, contactNumber } = values;

    if (!eventDate || !contactPerson || !contactEmail || !contactNumber) {
      setDisplayMsg((prev) => ({
        type: "error",
        title: "missing information",
        content: `Please fill all required fields`,
      }));
      setDisplayModal(true);
      return;
    }
    createEvent();
  };

  const clearForm = () => {
    setValues(initialValues);
  };

  return (
    <>
      {displayModal && (
        <ModalMessage msg={displayMsg} closeModal={closeModal} />
      )}
      <form className={`form ${styles["event-form"]}`}>
        <FormRow
          type="text"
          name="eventName"
          labelText="event title"
          handleChange={handleChange}
          value={values.eventName}
        />
        <FormRowDatePicker
          labelText="Event Date"
          required={true}
          handleChange={(date) =>
            setValues((prev) => ({ ...prev, eventDate: date }))
          }
          minDate={new Date()}
          selectedDate={values.eventDate}
        />
        <FormRow
          type="text"
          name="contactPerson"
          required={true}
          labelText="contact person"
          handleChange={handleChange}
          value={values.contactPerson}
        />
        <FormRow
          type="text"
          name="contactNumber"
          required={true}
          labelText="contact number"
          handleChange={handleChange}
          value={values.contactNumber}
        />
        <FormRow
          type="email"
          name="contactEmail"
          required={true}
          labelText="contact email"
          handleChange={handleChange}
          value={values.contactEmail}
        />
        <FormRowTextArea
          name="eventDescription"
          labelText="event description"
          handleChange={handleChange}
          value={values.eventDescription}
        />
        <button
          type="submit"
          className={`btn btn-block ${styles["btn-event"]}`}
          onClick={handleSubmit}
          disabled={isLoading}
        >
          submit
        </button>
      </form>
    </>
  );
};

export default EventForm;
