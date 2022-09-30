# Instructions

(Fork this sandbox before getting started and please read through the full instruction below before you start coding.)

- User should be able to use the provided input to search for images.
- Image search is triggered when the user clicks on the search button.
- Use the data from the api response to show a list of images (more info. on api endpoints in "src/api.ts")
- You can use the provided Image component to show an individual image (src/components/Image.tsx). Customizing the component and styling is allowed.
- You can refactor existing components and change their styling as you wish.
- Once you're done building the app, open up the DESIGN.md file and give your answer to the questions.

# Bonus (Not required, but has extra credit)

- Build a component that pops up as a dialog when an image is clicked showing extra information about the image
- Create a polished UI

# Evaluation criteria

- Code organization
- Appropriate use of types
- Appropriate handling of loading and error states
- Handle race conditions if any

# What's allowed

- Pure data fetching libraries like Axios are allowed. But don't use higher-order libraries that go beyond standard data fetching. No libraries with caching, and transformation capabilities.
- Feel free to use lodash and other dependencies available in this project
- Even though UX design is not a primary evaluation criteria if you do decide to go the extra mile to create an immersive UX don't rely on a UI component library (mui, chakra, tailwind etc.) Custom styling all the way. Feel free to use any styling methodology(imported css, sass, css modules, css-in-js etc.).
