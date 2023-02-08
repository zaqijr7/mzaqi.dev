const response = (res, status, message, results, pageInfo) => {
  const result = {};
  result.message = message;
  result.results = results;
  result.pageInfo = pageInfo;

  return res.status(status).json(result);
};

export default response;
