-   There are three main options how to hide element on the page

    1. `display: none;` -- This one removes element from the DOM
    2. `visibility: hidden;`
    3. `opacity: 0;`

-   There are some differences between `border` and `outline` props

    1. `border` property is the part of the box-sizing conception and it affects the element's position and size directly, while the `outline` prop doesn't.
    2. You can set `border` style for each side of the box separately.
    3. You can offset the `outline` from the element with the `outline-offset` prop.
