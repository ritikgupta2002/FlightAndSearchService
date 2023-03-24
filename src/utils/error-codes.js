//creating an enum for the client error codes

//we are doing object.freeze so that no where else we can update the object ,like no other controller or class is able to modify it  .

const ClientErrorCodes = Object.freeze({
  BAD_REQUEST: 400,
  UNAUTHORIZED: 301,
  NOT_FOUND: 404,
});

const ServerErrorCodes = Object.freeze({
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
});

const SuccessCodes = Object.freeze({
  CREATED: 201,
  OK: 200,
});

module.exports = {
  ClientErrorCodes,
  ServerErrorCodes,
  SuccessCodes,
};
