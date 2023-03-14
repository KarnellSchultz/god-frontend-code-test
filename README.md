## [live app](https://volvo-code-test.karnellschultz.com/)

## Notes on the refactor

I approached this refactor as a way to improve the code structure and readability of the code. I attempted to abstract away the more complex parts or the components that could be reused. Below are a list of things I had in mind when working on this refactor. 

- I wanted to make the code more readable and easier to understand.
- Making the types more specific and easier to understand.
- Reducing the amount of folders and files where possible.
- Removing magic numbers and strings.
- Adding linting and formatting to the project.
- Simplifying data fetching and state management.
- Removing 'over-optimization' where possible, such as using `useCallback` and `useMemo` where it was not necessary.
- Code styles in general.



# Volvo Cars (Global Online Digital)

## Front-end coding test (React)

Our team's designer has come up with a new design to show our latest and greatest recharge cars on the website.

Here is how the design look like for desktop and mobile (files are stored under `docs` folder)

### Desktop

![ProductListDesktop](./docs/ProductList-Desktop.png)

### Mobile

![ProductListDesktop](./docs/ProductList-Mobile.png)

The data required to render the design is under `public/api/cars.json` folder. You need to fetch the data from the client side and render it in the browser. The data looks like this:

```json
[
  {
    "id": "xc90-recharge",
    "modelName": "XC90 Recharge",
    "bodyType": "suv",
    "modelType": "plug-in hybrid",
    "imageUrl": "/images/xc90_recharge.jpg"
  }
]
```

The product owner is telling you that you can generate the links to the learn and shop pages of each car by concatating the `id` of the car to the learn (`/learn/`) and shop (`/shop/`) urls.

Two extra SVG icons are also provided by our designer which are stored under `docs` folder.

## Requirements

- The project is bootstraped using [Next.js](https://nextjs.org/).
- Browser support is modern ever-green browsers.
- Implement this design using React and Typescript.
- Accessibility is important.
- Code Structure and reusablity is important.

## Bonus Points:

- If you use our design system component library, [VCC-UI](https://vcc-ui.vercel.app/)
- If you add a filter bar on the top to filter cars by `bodyType`


## To-dos

- [x] The project is bootstraped using [Next.js](https://nextjs.org/).
- [x] Browser support is modern ever-green browsers.
- [x] Implement this design using React and Typescript.
- [x] Accessibility is important.
- [x] check code structure
- [x] use vcc
- [x] feature filter bar 