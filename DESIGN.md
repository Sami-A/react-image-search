## Q: Suppose you're building this in the context of an image search library to be published on npm. What would have to change to make this search experience library-ready. Can you share your ideas in terms of different design choices and tradeoffs.

...

> **A:**

- Make it library / framework agnostic so that it can be used anywhere. Just like the `Google maps library`. It's written using pure javascript which can be shipped everywhere.

- Provide many utility functions.

  **For instance:**

  - Add some caching feature(specially for the queries and image).
  - Different event listeners in addition to click event(onKeyDown/Up).

- Highly customizable UI components(make components accepts classes & css properties).
- Give the user the option to handle data fetching by themselves if not, accept the necessary options to get the data.

  **For instance:**

  - API Headers
  - Authentication tokens

- The ability to search onClick or onKeyPress(with debounce)
- Give user the ability to display error messages & loading indicator instead of displaying it inside the parent component. The user might what to show them separately using SnackBar or PopupWindows. We can also use render props( **personally, I don't prefer them** ).
- Add pagination with prefetching capability for quick access.

  ### **Tradeoffs**

  One of the tradeoffs is, should we separate the UI from the functionality and let the user handle it, or should we combine them together.

  - If we separate the UI, it would be more work for the user but can be very flexible.
  - If we combine it, it's less work however, the library size is going to be larger. In addition, user might be locked on some use-cases.

## Q: Suppose you're architecting image search in the context of being able to support different UI designs for the visual components of the app(input, button, image component). What if any architecture choices would come into play?

...

> **A:** Currently I used `Component composition`. Separate the components, style as needed and wrap them with their parent component(`passing components as props`). For styling I used Emotion(css-in-js) to help me isolate components to prevent style conflicts.

_This is the traditional Way. For instance:_

```
<ImageSearchWrapper backGround="#000" >
  <Input color="#fff" className="padding-2"/>
  <Button style={color: "yellow"}/>
  <ImageGallery size={theme.xl}/>
</ImageSearchWrapper>

/*ImageSearchWrapper.tsx*/
const ImageSearchWrapper = ({children, ...props})=>{
  ...
  return <div>{children}<div/>
};

```

> Another approach is `Compound component` design pattern. A tightly coupled components and yet has different looks & roles. They might not be useful independently but powerful when combined together. Furthermore, the parent component manages the logic.

_For instance:_

```
<select>
   <option>...</option>
   <option>...</option>
</select>
```

_In our case we can build the components like so:_

```
<ImageSearch>
    <ImageSearch.Input>...<ImageSearch.Input/>
    <ImageSearch.Button>...<ImageSearch.Button/>
    <ImageSearch.Images>
        <ImageSearch.Image>
        </ImageSearch.Image>
    <ImageSearch.Images/>
</ImageSearch>

/** Each components can be support different UI designs. */
```

_To manage/sync states we can use context._
