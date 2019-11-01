- [ ] Why would you use class component over function components (removing hooks from the question)?

Only because likely we will encounter legacy code where class components are used


- [ ] Name three lifecycle methods and their purposes.

Mounting:
- constructor function runs
-component born
-ends with componentDid Mount
- where initial data fetched, eventListeners are set up

Updating:
-re-renders when change to state or new props
-where additional data fetched
-componentDidUpdate similar to useEffect hook

Unmounting:
-end of lifecycle
-where component is unmounted and side-effect clean-up occurs 

- [ ] What is the purpose of a custom hook?

To be able to define a hook to perform specific actions that can be reused where ever needed. Keeps code DRY

- [ ] Why is it important to test our apps?

-essential for software quality
-bugs are found more quickly
-more resiliant code when edge cases are considered
-if a change breaks code, clues about why and where in test results
-documentation: anyone can look at tests and see expectations for what pieces should do for user