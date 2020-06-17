function createSuccessResponse(res, msg, data) {
  const id = Math.ceil(Math.random() * 9999999);
  res.json({
    id: id,
    status: "success",
    message: msg,
    data: data,
  });
}

function createErrorResponse(res, msg, error) {
  const id = Math.ceil(Math.random() * 9999999);
  console.log(error);
  res.status(422).json({
    id: id,
    status: "error",
    message: msg,
    details: getPureError(error),
  });
}

function replaceErrors(key, value) {
  if (value instanceof Error) {
    var error = {};

    Object.getOwnPropertyNames(value).forEach(function (key) {
      if (key == "stack") return;
      error[key] = value[key];
    });

    return error;
  }

  return value;
}

function getPureError(error) {
  return JSON.parse(JSON.stringify(error, replaceErrors));
}
/** check if data is avilabel */
function responseWithDataCheck(res, data) {
  if (data == "" || data == null || data == [] || data == {}) {
    return createErrorResponse(res, "no data available", "no data available");
  } else {
    return createSuccessResponse(res, "successful", data);
  }
}
module.exports = {
  createSuccessResponse,
  createErrorResponse,
  responseWithDataCheck,
};
