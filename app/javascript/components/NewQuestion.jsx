import React, { useState } from "react";

const NewQuestion = () => {
  const [showLoader, setShowLoader] = useState(false);
  const tags = [
    { title: "Ruby", value: 0 },
    { title: "Rails", value: 1 },
    { title: "React", value: 2 },
    { title: "Vue", value: 3 },
    { title: "JQuery", value: 4 },
  ];
  const [formFields, setFormFields] = useState({
    title: "",
    content: "",
    tag: tags[0].value,
  });

  // Copy all existing form values, then update only the field that the user just typed in — all using ONE smart function.
  // ...formFields - Keep all other fields unchanged
  // [event.target.name]: event.target.value - Update only the changed field
  const handleFormFields = (event) => {
    setFormFields({ ...formFields, [event.target.name]: event.target.value });
  };

  const create_question = (event) => {
    event.preventDefault();
    console.log(formFields);
  };

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                New Question
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={create_question}>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Title:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    name="title"
                    value={formFields.title}
                    onChange={(event) => handleFormFields(event)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Tag:
                  </label>
                  <select
                    name="tag"
                    id="tags"
                    className="form-select"
                    value={formFields.tag}
                    onChange={(event) => handleFormFields(event)}
                  >
                    {tags.map((tag) => (
                      <option key={tag.value} value={tag.value}>
                        {tag.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">
                    Content:
                  </label>
                  <textarea
                    className="form-control"
                    id="message-text"
                    name="content"
                    value={formFields.content}
                    onChange={(event) => handleFormFields(event)}
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewQuestion;
