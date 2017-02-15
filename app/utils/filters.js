export function notReviewed(submission) {
  return submission.REJECTED_DATE === '';
}

export function notQuoted(submission) {
  return submission.REJECT_REASON === 'Not Quoted';
}

export function quoteAccepted(submission) {
  return submission.REJECT_AFTER_QUOTE_FLAG === 'N';
}

export function quoteRejected(submission) {
  return submission.REJECT_AFTER_QUOTE_FLAG === 'Y';
}

// export function noResponse(submission) {
//   return submission.REJECT_DATE === '' && submission.BOUND_DATE === '';
// }
