/*
**Problem**
The objective of this practice problem is to build a function that parses a string of email data. 
The function takes an argument that contains the data, parses it, then produces two basic statistics about the email:

  - The number of email messages found in the string
  - The date range of the email messages

The email messages string has the following characteristics:

  - The string contains multiple email messages separated by the delimiter string ##||##.

  - Each email message has five parts. The delimiter string #/# separates the parts.

  - The five parts are:
    - Sender
    - Subject
    - Date
    - Recipient
    - Body

  - All five parts occur in the sequence shown above.

**Examples / Test Cases**


**Data Structures**


**Algorithm**
*/



function mailCount(emailData) {
  let emails = emailData.split('##||##.');
  console.log(emails.length);
}

mailCount(emailData);

// console output

// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016