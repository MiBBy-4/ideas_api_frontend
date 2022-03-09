export function responsesCount(responses) {
  return responses.reduce((count, response) => {
    count += 1;
    return count;
  }, 0);
}