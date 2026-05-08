import React from "react";

const NoSearchFoundMessage = ({ tag }) => {
  return (
    <div>
      <div
        className="mt-5 alert alert-danger alert-dismissible fade show"
        role="alert"
      >
        <strong>Oops!</strong> No Resul Found with {tag.label} Tag.
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        />
      </div>
    </div>
  );
};

export default NoSearchFoundMessage;
