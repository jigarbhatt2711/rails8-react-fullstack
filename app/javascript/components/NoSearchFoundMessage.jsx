import React from "react";

const NoSearchFoundMessage = ({tag}) => {
  return (
    <div className="mt-5 alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Oops!</strong> No Resul Found with {tag.label} Tag.
    </div>
  );
};

export default NoSearchFoundMessage;
