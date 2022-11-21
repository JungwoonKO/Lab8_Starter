# Lab 8 - Starter

1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

Answer: Within a Github action that runs whenever code is pushed.
- If you run automated tests after all developemnt is completed, you might cannt find where problems occurs and hard to debugg. And if you run your test locally, it mgiht take a lot of times, and this could casue some problmes on your workflow.

2. Would you use an end to end test to check if a function is returning the correct output?

Answer: No

3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

Answer: No
- Units Test do test only individual parts of codes in encapsulated unit as it's mentioned in write up paper. So, "messeage" feature is inappropriate for Unit Test because this feature is process of various functions.

4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Answer : Yes
- I do not think complicate codes and functions are not neccesary to process the "max message length" feature. We just neet to get a input message, check if it is exceed to 80 characters and return boolean value. So, Unit Test is fit in this feature.

