  <div align="center">
  <h1 align="center">React Admin Posters Shop</h1>
  <h3>Codebase for the React Admin Posters Shop platform</h3>
  <h3>◦ Developed with the software and tools below.</h3>
  <p align="center"><img src="https://img.shields.io/badge/-React-004E89?logo=React&style=social" alt='React\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-TypeScript-004E89?logo=TypeScript&style=social" alt='TypeScript\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Vite-004E89?logo=Vite&style=social" alt='Vite\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-React%20Admin-004E89?logo=React%20Admin&style=social" alt='React Admin\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Material%20UI-004E89?logo=Material%20UI&style=social" alt='Material-UI\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Date%20fns-004E89?logo=Date%20fns&style=social" alt='Date-fns"' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" />
  </p>
  </div>
  
  ---
  ## 📚 Table of Contents
  - [📚 Table of Contents](#-table-of-contents)
  - [🔍 Overview](#-overview)
  - [🌟 Features](#-features)
  - [📁 Repository Structure](#-repository-structure)
  - [💻 Code Summary](#-code-summary)
  - [🚀 Getting Started](#-getting-started)
  
  ---
  
  
  ## 🔍 Overview

This is a React project with a TypeScript configuration. The project structure includes the following directories and files:_ `src`: Contains the source code for the application._ `public`: Contains static assets that are served directly by the server, such as images and fonts._ `index.html`: The main HTML file for the application._ `package.json`: The package manifest for the application, which defines the dependencies and scripts._ `tsconfig.json`: The TypeScript configuration file, which specifies the compiler options and settings for the project._ `vite.config.ts`: The Vite configuration file, which specifies the Vite-specific settings for the project.The `src` directory contains the following subdirectories and files:\* `App.tsx`: The main entry point of the application, which renders the root component.

---

## 🚀 Getting Started

To get started with this React project, you'll need to install the dependencies and run the development server. Here are the steps:<br>

1. Install the dependencies by running `yarn install`.
2. Rename a `copy.env` file to `.env` and change environment variables if necessary.
3. Start the development server by running `yarn run dev` or `docker compose up -d`
4. For api copy and run the application from the git-repository https://github.com/dmitry-m/posters-shop-nest-prisma-api
5. Access the application by navigating to http://localhost:5173 in your web browser

---

## 🌟 Features

The project includes the following features:<br>

- React
- TypeScript
- Vite
- Internationalization (i18n)
- Dashboard
- Categories
- Products
- Orders
- Reviews
- Users
- Visitors
- Segments
- Customers
- Authentication
- Authorization
- Data Provider
- API Constants
- JWT Manager
- Themes
- Custom Theme
- Soft Theme
- Themes Swapper
- Layout
- App Bar
- Custom Page
- Login
- Logo
- Menu
- Register
- User Menu
- Welcome

---

## 📁 Repository Structure

```sh
├── .eslintrc
├── .gitignore
├── .prettierrc
├── copy.env
├── index.html
├── package.json
├── README.md
├── src
│   ├── App.tsx
│   ├── categories
│   │   ├── CategoryEdit.tsx
│   │   ├── CategoryList.tsx
│   │   ├── index.ts
│   │   └── LinkToRelatedProducts.tsx
│   ├── dashboard
│   │   ├── CardWithIcon.tsx
│   │   ├── Dashboard.tsx
│   │   ├── index.ts
│   │   ├── MonthlyRevenue.tsx
│   │   ├── NbNewOrders.tsx
│   │   ├── NewCustomers.tsx
│   │   ├── OrderChart.tsx
│   │   ├── PendingOrder.tsx
│   │   ├── PendingOrders.tsx
│   │   ├── PendingReviews.tsx
│   │   ├── Welcome.tsx
│   │   └── welcome_illustration.svg
│   ├── i18n
│   │   ├── en.ts
│   │   ├── index.ts
│   │   └── ru.ts
│   ├── index.tsx
│   ├── invoices
│   │   ├── index.ts
│   │   ├── InvoiceList.tsx
│   │   └── InvoiceShow.tsx
│   ├── layout
│   │   ├── AppBar.tsx
│   │   ├── AppBarToolbar.tsx
│   │   ├── CustomPage.tsx
│   │   ├── index.ts
│   │   ├── Layout.tsx
│   │   ├── Login.tsx
│   │   ├── Logo.tsx
│   │   ├── Menu.tsx
│   │   ├── Register.tsx
│   │   └── UserMenu.tsx
│   ├── orders
│   │   ├── Basket.tsx
│   │   ├── index.ts
│   │   ├── MobileGrid.tsx
│   │   ├── NbItemsField.tsx
│   │   ├── OrderEdit.tsx
│   │   ├── OrderList.tsx
│   │   ├── TableCellRight.tsx
│   │   └── Totals.tsx
│   ├── products
│   │   ├── Aside.tsx
│   │   ├── CreateRelatedReviewButton.tsx
│   │   ├── GridList.tsx
│   │   ├── index.tsx
│   │   ├── Poster.tsx
│   │   ├── ProductCreate.tsx
│   │   ├── ProductEdit.tsx
│   │   ├── ProductEditDetails.tsx
│   │   ├── ProductList.tsx
│   │   ├── ProductReferenceField.tsx
│   │   ├── ProductRefField.tsx
│   │   └── ThumbnailField.tsx
│   ├── providers
│   │   ├── apiConstants.ts
│   │   ├── authProvider.ts
│   │   ├── dataProvider.ts
│   │   ├── index.ts
│   │   └── JWTManager.ts
│   ├── reviews
│   │   ├── AcceptButton.tsx
│   │   ├── BulkAcceptButton.tsx
│   │   ├── BulkRejectButton.tsx
│   │   ├── index.ts
│   │   ├── RejectButton.tsx
│   │   ├── ReviewCreate.tsx
│   │   ├── ReviewEdit.tsx
│   │   ├── ReviewEditToolbar.tsx
│   │   ├── reviewFilters.tsx
│   │   ├── ReviewItem.tsx
│   │   ├── ReviewList.tsx
│   │   ├── ReviewListDesktop.tsx
│   │   ├── ReviewListMobile.tsx
│   │   ├── rowSx.tsx
│   │   ├── StarRatingField.tsx
│   │   └── StarRatingInput.tsx
│   ├── segments
│   │   ├── data.ts
│   │   ├── LinkToRelatedCustomers.tsx
│   │   └── Segments.tsx
│   ├── themes
│   │   ├── customTheme.ts
│   │   ├── index.ts
│   │   ├── softTheme.ts
│   │   ├── themes.tsx
│   │   └── ThemeSwapper.tsx
│   ├── types.ts
│   ├── users
│   │   ├── AvatarField.tsx
│   │   ├── FullNameField.tsx
│   │   ├── index.ts
│   │   ├── MobileGrid.tsx
│   │   ├── RoleField.tsx
│   │   ├── RoleInput.tsx
│   │   ├── roles.ts
│   │   ├── UserCreate.tsx
│   │   ├── UserEdit.tsx
│   │   ├── UserForm.tsx
│   │   ├── UserLinkField.tsx
│   │   └── UserList.tsx
│   ├── visitors
│   │   ├── AddressField.tsx
│   │   ├── Aside.tsx
│   │   ├── AvatarField.tsx
│   │   ├── ColoredNumberField.tsx
│   │   ├── CustomerLinkField.tsx
│   │   ├── CustomerReferenceField.tsx
│   │   ├── FullNameField.tsx
│   │   ├── index.ts
│   │   ├── MobileGrid.tsx
│   │   ├── SegmentInput.tsx
│   │   ├── segments.ts
│   │   ├── SegmentsField.tsx
│   │   ├── SegmentsInput.tsx
│   │   ├── VisitorCreate.tsx
│   │   ├── VisitorEdit.tsx
│   │   ├── VisitorList.tsx
│   │   └── VisitorListAside.tsx
│   └── vite-env.d.ts
├── tsconfig.json
├── vite.config.ts
├── yarn-error.log
└── yarn.lock

```

---

## 💻 Code Summary

<details><summary>\src</summary>

| File          | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| App.tsx       | The code defines a React component called `AdminApp` that renders an instance of the `Admin` component from the `react-admin` library. It also defines a custom `dataProvider` and `authProvider` for authentication and data fetching, as well as a custom `i18nProvider` for internationalization. The component also defines several resources (e.g. customers users commands etc.) that are used to display data in the admin interface. |
| index.tsx     | The code creates a React application by rendering the App component inside a StrictMode wrapper, and mounts it to the root element with ID root in the DOM.                                                                                                                                                                                                                                                                                  |
| types.ts      | The code defines a set of interfaces and types for a fictional e-commerce application, including User, Product, Category, Order, Invoice, and Review.                                                                                                                                                                                                                                                                                        |
| vite-env.d.ts | The code defines an interface for the `env` object in Vite, which provides access to environment variables defined in the `.env` file.                                                                                                                                                                                                                                                                                                       |

</details>

---

<details><summary>\src\categories</summary>

| File                      | Summary                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CategoryEdit.tsx          | The code defines a React component called `CategoryEdit` that renders an edit form for a category resource in the react-admin framework. The form includes a text input field for the category name, a reference to a related products collection, and a datagrid displaying information about the products, including their thumbnails, references, prices, dimensions, stock levels, and sales figures. |
| CategoryList.tsx          | The code defines a React component called `CategoryList` that renders a list of categories using the `react-admin` library. It imports various components and hooks from `@mui/material`, `inflection`, and `react-admin`, and uses them to display a grid of cards with category information, including a name, image, and actions to edit or view related products.                                     |
| index.ts                  | The code defines a default export object with three properties: list edit and icon each of which corresponds to a React component.                                                                                                                                                                                                                                                                        |
| LinkToRelatedProducts.tsx | The code defines a React component called LinkToRelatedProducts that renders a button linking to the products page with a filter applied based on the category ID of the current record.                                                                                                                                                                                                                  |

</details>

---

<details><summary>\src\dashboard</summary>

| File               | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CardWithIcon.tsx   | The code defines a React component called `CardWithIcon` that renders an MUI `Card` with an icon, title, and subtitle. The component uses the `react-router-dom` library to create a link to a specified destination.                                                                                                                                                                                                                     |
| Dashboard.tsx      | The code defines a React component called Dashboard that displays various statistics and charts related to an e-commerce store. It uses the react-admin library to fetch data from the API and display it in a dashboard format. The component is designed to be responsive and adapt to different screen sizes.                                                                                                                          |
| index.ts           | The code exports a Dashboard component and sets it as the default export for the module.                                                                                                                                                                                                                                                                                                                                                  |
| MonthlyRevenue.tsx | The MonthlyRevenue component is a React functional component that renders a card with an icon and title, using the CardWithIcon component from the react-admin library. It takes in a value prop for the card's subtitle and a children prop for any additional content to be rendered within the card.                                                                                                                                   |
| NbNewOrders.tsx    | The code defines a React component called NbNewOrders that displays the number of new orders in a card with an icon and a title, using the react-admin library for translation.                                                                                                                                                                                                                                                           |
| NewCustomers.tsx   | The code defines a React component called NewCustomers that displays a list of customers who have ordered products in the last 30 days, along with their names and avatars. The component uses the react-admin library to fetch the customer data from the API and display it in a card with an icon and a button to view all customers.                                                                                                  |
| OrderChart.tsx     | The code defines a React component called `OrderChart` that displays a chart of the revenue generated by orders over the past 30 days, using the `recharts` library. The chart is displayed in a responsive container and includes a tooltip that displays the total revenue for each day. The component takes an array of `orders` as a prop and uses the `date-fns` library to format the dates and calculate the revenue for each day. |
| PendingOrder.tsx   | The code defines a React component called PendingOrder that renders a list item with information about an order, including the customer's name, date, and total price. It uses the react-admin library to fetch the customer data and the material-ui library to style the list item.                                                                                                                                                     |
| PendingOrders.tsx  | The code defines a React component called PendingOrders that displays a list of pending orders using the Material-UI library.                                                                                                                                                                                                                                                                                                             |
| PendingReviews.tsx | The code defines a React component called `PendingReviews` that displays a list of pending reviews, including the customer's avatar, rating, and comment. It uses the `useGetList` hook from `react-admin` to fetch the list of reviews and the `query-string` library to parse the search query string. The component also includes a button to navigate to the reviews page with a filter for pending reviews.                          |
| Welcome.tsx        | The code defines a React component called Welcome that displays a card with a title, subtitle, and two buttons. The card has a gradient background and is styled to match the Material-UI design system. The component uses the react-admin library for internationalization and the useTranslate hook to translate the text.                                                                                                             |

</details>

---

<details><summary>\src\i18n</summary>

| File     | Summary                                                                                                                                                                                                                                |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| en.ts    | The code defines a custom translation messages object for the react-admin framework, specifically for the English language. It includes translations for various components and features, such as buttons, labels, and error messages. |
| index.ts | The code defines an i18nProvider for the react-admin framework, which provides translations for the Russian and English languages.                                                                                                     |
| ru.ts    | The code defines a custom translation messages object for the Russian language, which includes translations for various components and features in the react-admin framework.                                                          |

</details>

---

<details><summary>\src\invoices</summary>

| File            | Summary                                                                                                                                                                                                                                                                                                                                      |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| index.ts        | The code defines a default export object with a list and icon property, where the list is an InvoiceList component and the icon is an InvoiceIcon material-ui icon.                                                                                                                                                                          |
| InvoiceList.tsx | The code defines a React component called InvoiceList that renders a list of invoices, including their ID, date, customer name, address, reference number, total excluding taxes, delivery fees, taxes, and total. The list is sorted by date in descending order and can be filtered by date range using the date_gte and date_lte filters. |
| InvoiceShow.tsx | The code defines a React component called InvoiceShow that displays an invoice, including the customer's name, address, and order details.                                                                                                                                                                                                   |

</details>

---

<details><summary>\src\layout</summary>

| File              | Summary                                                                                                                                                                                                                                                                                                                                                                                          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| AppBar.tsx        | The code defines a custom app bar component for the React-admin framework, using Material-UI components and customizing its appearance by adding a logo and user menu.                                                                                                                                                                                                                           |
| AppBarToolbar.tsx | The AppBarToolbar component from the react-admin library renders a toolbar with a LocalesMenuButton, ThemeSwapper, and LoadingIndicator components.                                                                                                                                                                                                                                              |
| CustomPage.tsx    | The code defines a custom page component that uses the MUI ThemeProvider to provide a custom theme based on the user's preferences, which can be either light or dark. It also includes a useEffect hook to redirect the user to the homepage if they have the necessary permissions.                                                                                                            |
| index.ts          | The code exports five components from a React application: AppBar, Layout, Login, Menu, and Register.                                                                                                                                                                                                                                                                                            |
| Layout.tsx        | The code defines a custom layout component for the react-admin framework, which renders an AppBar and Menu components.                                                                                                                                                                                                                                                                           |
| Login.tsx         | The code defines a React component called Login that renders a form for logging in to an application. It uses the react-admin library for authentication and includes a username and password input field, as well as buttons for submitting the form and registering a new user. The component also includes a custom page layout using the CustomPage component from the same library.         |
| Logo.tsx          | The code defines a React component called Logo that renders an SVG logo.                                                                                                                                                                                                                                                                                                                         |
| Menu.tsx          | The code defines a React component called Menu that renders a menu with different links based on the user's permissions. The menu includes items for users, commands, invoices, products, categories, customers, segments, and reviews. The component uses the react-admin library to handle the menu's layout and styling.                                                                      |
| Register.tsx      | The code defines a React component called Register that renders a form for registering a new user. The form includes input fields for the user's username, password, and password repeat, as well as buttons for submitting the form and navigating to the login page. The component also imports several other components and hooks from the Material-UI library and the react-admin framework. |
| UserMenu.tsx      | The code defines a custom user menu component for the react-admin framework, which includes a settings menu item that links to the user's profile page and a logout button.                                                                                                                                                                                                                      |

</details>

---

<details><summary>\src\orders</summary>

| File               | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Basket.tsx         | The code defines a component called Basket that displays a table of products in an order, including their reference, unit price, quantity, and total. It uses the react-admin library to fetch the products and display them in a table.                                                                                                                                                                                                                                           |
| index.ts           | The code defines a default export object that contains three properties: list, edit, and icon, each of which refers to a React component.                                                                                                                                                                                                                                                                                                                                          |
| MobileGrid.tsx     | The code defines a `MobileGrid` component that renders a list of orders in a card format, using the `react-admin` library. The component uses the `useListContext` hook to fetch the list of orders and the `RecordContextProvider` to provide the current order record to its children. It also uses the `DateField`, `NumberField`, `TextField`, and `BooleanField` components from `react-admin` to display the order's date, total, status, and returned fields, respectively. |
| NbItemsField.tsx   | The code defines a React component called `NbItemsField` that renders the number of items in an order as a function field in the react-admin framework.                                                                                                                                                                                                                                                                                                                            |
| OrderEdit.tsx      | The code defines a React component called OrderEdit that renders an edit form for an order resource, using the react-admin library. The form includes fields for editing the order's reference, status, and customer details, as well as a basket and totals section.                                                                                                                                                                                                              |
| OrderList.tsx      | The code defines a React component called OrderList that renders a list of orders, allowing users to filter and sort the orders by status, date, and other criteria. The component uses the react-admin library to handle the list rendering and filtering, and it includes a custom TabbedDatagrid component that displays the orders in a tabular format with different tabs for each status.                                                                                    |
| TableCellRight.tsx | The code defines a styled version of the MUI TableCell component with the textAlign property set to right                                                                                                                                                                                                                                                                                                                                                                          |
| Totals.tsx         | The code defines a React component called Totals that displays a table with the total cost of an order, including delivery fees, taxes, and a bolded total. It uses the react-admin library for internationalization and the MUI library for styling.                                                                                                                                                                                                                              |

</details>

---

<details><summary>\src\products</summary>

| File                          | Summary                                                                                                                                                                                                                                                                                                                                                                                      |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aside.tsx                     | The code defines a React component called Aside that displays a list of filters for a product resource in the react-admin framework. The filters include sales, stock, and category filters, and each filter is represented by a label, an icon, and a value. The component uses the useGetList hook to fetch the list of categories and render them as filter options.                      |
| CreateRelatedReviewButton.tsx | The code defines a custom React component called `CreateRelatedReviewButton` that creates a new review record related to the current product record, using the `react-admin` library.                                                                                                                                                                                                        |
| GridList.tsx                  | The code defines a `GridList` component that displays a list of products in a grid format, using the `ImageList` and `ImageListItem` components from the Material UI library. The component uses the `useListContext` hook to access the data and loading state of the list, and conditionally renders either a loading indicator or the actual list of products based on the loading state. |
| index.tsx                     | The code defines a default export object that maps to four components: ProductList, ProductCreate, ProductEdit, and ProductIcon.                                                                                                                                                                                                                                                             |
| Poster.tsx                    | The code defines a React component called Poster that displays an image for a product using the MUI Card and CardMedia components, with the image source coming from the image field of the product record.                                                                                                                                                                                  |
| ProductCreate.tsx             | The code defines a React component called ProductCreate that renders a form for creating a product, using the react-admin library. The form includes three tabs: an image tab, a details tab, and a description tab. The details tab is a custom component called ProductEditDetails                                                                                                         |
| ProductEdit.tsx               | The code defines a React component called ProductEdit that renders an edit form for a product, including fields for image, details, description, and reviews. It uses the react-admin library to define the form layout and functionality.                                                                                                                                                   |
| ProductEditDetails.tsx        | The code defines a React component called ProductEditDetails that renders a form with input fields for editing product details, including a reference number, category, width, height, price, stock, and sales.                                                                                                                                                                              |
| ProductList.tsx               | The code defines a React component called `ProductList` that renders a list of products, including a filter form and a pagination component. It also includes a `QuickFilter` component that allows the user to quickly filter the list by a specific attribute.                                                                                                                             |
| ProductReferenceField.tsx     | The code defines a custom React component called ProductReferenceField that renders a reference field for a product, using the react-admin library.                                                                                                                                                                                                                                          |
| ProductRefField.tsx           | The code defines a React component called `ProductRefField` that renders a link to the product details page using the `MuiLink` component from Material-UI, passing the product ID as a prop. It also uses the `useRecordContext` hook from `react-admin` to access the current record and the `Link` component from `react-router-dom` to navigate to the product details page.             |
| ThumbnailField.tsx            | The code defines a React component called ThumbnailField that renders an image with a fixed size of 25x25 pixels, using the styled function from Material-UI to style the image and the useRecordContext hook from react-admin to retrieve the record data.                                                                                                                                  |

</details>

---

<details><summary>\src\providers</summary>

| File            | Summary                                                                                                                                                                                                                                                                |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| apiConstants.ts | The code defines constants for API URLs and endpoints used in a login, signup, logout, and token management process.                                                                                                                                                   |
| authProvider.ts | The code defines an `authProvider` object that implements the `AuthProvider` interface from the `react-admin` library. It provides methods for authentication, authorization, and token management, as well as a `setAuth` method for setting the authentication data. |
| dataProvider.ts | The code defines a data provider for a React-Admin application, using the `simpleRestProvider` function to fetch data from an API endpoint. It also includes an `update` method that modifies the `data` parameter before passing it to the `restProvider`.            |
| index.ts        | The code exports two functions, `authProvider` and `dataProvider`, from separate files.                                                                                                                                                                                |
| JWTManager.ts   | The code defines a `TokenManager` class that manages authentication tokens for a React application. It has methods to fetch, set, and erase the token, as well as a method to refresh the token periodically based on its validity period.                             |

</details>

---

<details><summary>\src\reviews</summary>

| File                  | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AcceptButton.tsx      | The code defines a React component called `AcceptButton` that renders a Material-UI button with an icon and text. The button is only rendered if the record status is pending When clicked, the button triggers an API call to update the record status to accepted using the `useUpdate` hook from `react-admin`. The `useNotify`, `useRedirect`, and `useRecordContext` hooks are used to display a success or error notification, redirect to the reviews list, and access the current record context, respectively. |
| BulkAcceptButton.tsx  | The code defines a React component called BulkAcceptButton that renders a button with an icon and label, which when clicked, updates the status of multiple records in a reviews resource to ACCEPTED using the useUpdateMany hook from react-admin                                                                                                                                                                                                                                                                     |
| BulkRejectButton.tsx  | The code defines a React component called BulkRejectButton that renders a button with an icon and label, which when clicked, updates the status of multiple records in the reviews resource to REJECTED                                                                                                                                                                                                                                                                                                                 |
| index.ts              | The code defines a default export object with properties for an icon, list, and create components related to reviews.                                                                                                                                                                                                                                                                                                                                                                                                   |
| RejectButton.tsx      | The code defines a React component called RejectButton that renders a Material-UI button with an icon and text. The button is only rendered if the record status is pending When clicked, the button calls the reject function, which updates the review status to rejected using the useUpdate hook from react-admin The button also displays a notification and redirects to the reviews list page on success or error.                                                                                               |
| ReviewCreate.tsx      | The code defines a React component called `ReviewCreate` that renders a form for creating a new review, using the `react-admin` library. The form includes input fields for customer, product, date, rating, and comment, as well as a custom `StarRatingInput` component. The component also uses the `useNotify`, `useRedirect`, and `getRecordFromLocation` hooks from `react-admin`.                                                                                                                                |
| ReviewEdit.tsx        | The code defines a React component called `ReviewEdit` that renders an edit form for a `Review` resource in the `react-admin` framework. The component uses various MUI components to create a layout with a toolbar, a grid of fields, and a text input for the review comment. It also includes a `useTranslate` hook to translate the labels and placeholders.                                                                                                                                                       |
| ReviewEditToolbar.tsx | The ReviewEditToolbar component is a custom toolbar for the reviews resource in react-admin, which displays buttons for accepting or rejecting a review, as well as a save and delete button.                                                                                                                                                                                                                                                                                                                           |
| reviewFilters.tsx     | The code defines a list of filters for the reviews resource in the react-admin framework, including search, status, customer, product, and date filters.                                                                                                                                                                                                                                                                                                                                                                |
| ReviewItem.tsx        | The code defines a component called `ReviewItem` that renders a list item with an avatar, primary text, and secondary text. The primary text is a reference to a customer's name and the secondary text is a comment left by the customer on a product. The component uses the `useRecordContext` hook to access the current record and the `useCreatePath` hook to generate a link to edit the record.                                                                                                                 |
| ReviewList.tsx        | The code defines a component called `ReviewList` that displays a list of reviews using the `react-admin` library. It also includes a drawer that displays a review edit form when a specific review is selected.                                                                                                                                                                                                                                                                                                        |
| ReviewListDesktop.tsx | The code defines a React component called `ReviewListDesktop` that renders a Datagrid with various columns, including a DateField, CustomerReferenceField, ProductReferenceField, StarRatingField, and TextField. It also includes BulkAcceptButton, BulkRejectButton, and BulkUpdateButton components for bulk actions.                                                                                                                                                                                                |
| ReviewListMobile.tsx  | The code defines a component called `ReviewListMobile` that renders a list of reviews using the `useListContext` hook from `react-admin`. It maps over the data provided by the context and renders a `ReviewItem` component for each review.                                                                                                                                                                                                                                                                           |
| rowSx.tsx             | The code defines a function called `rowSx` that takes a record as an argument and returns a style object based on the record's status. The function uses MUI colors to set the border color and width for accepted, pending, and rejected records.                                                                                                                                                                                                                                                                      |
| StarRatingField.tsx   | The StarRatingField component is a custom field for the react-admin framework that displays a rating as a series of star icons, with the number of stars determined by the record's rating property.                                                                                                                                                                                                                                                                                                                    |
| StarRatingInput.tsx   | The code defines a custom input component for rating stars in the react-admin framework, using Material UI components.                                                                                                                                                                                                                                                                                                                                                                                                  |

</details>

---

<details><summary>\src\segments</summary>

| File                       | Summary                                                                                                                                                                                                                                   |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| data.ts                    | The code exports an array of objects, each representing a segment with an ID and name, used for displaying segment data in the app.                                                                                                       |
| LinkToRelatedCustomers.tsx | The code defines a React component called LinkToRelatedCustomers that renders an MUI Button with a Link to the customers page, passing a query string parameter filter with the value of a JSON-encoded object containing the segment ID. |
| Segments.tsx               | The code defines a React component called Segments that displays a list of segments, each with a name and a link to related customers.                                                                                                    |

</details>

---

<details><summary>\src\themes</summary>

| File             | Summary                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| customTheme.ts   | The code defines a custom theme for the Material-UI library, including overrides for various components such as the AppBar, Button, and FormControl. It also defines two palettes (light and dark) with different colors for the primary, secondary, background, text, and alerts. The createRadiantTheme function takes a palette option and returns a custom theme with the specified palette. |
| index.ts         | The code exports three modules from the ./themes file, a ThemeSwapper module from the ./ThemeSwapper file, and two custom themes (customLightTheme and customDarkTheme) from the ./customTheme file.                                                                                                                                                                                             |
| softTheme.ts     | The code defines two themes for a React-based application, softDarkTheme and softLightTheme which are used to customize the appearance of the application's UI. The themes define various styles and colors for different components, such as the app bar, sidebar, and menu items.                                                                                                              |
| themes.tsx       | The code defines a list of themes for the react-admin library, including custom, soft, and default themes, each with a light and dark variant.                                                                                                                                                                                                                                                   |
| ThemeSwapper.tsx | The code defines a component called ThemeSwapper that allows the user to change the theme of the application by clicking on a button and selecting an option from a menu. The component uses the react-admin library to manage the theme and stores the selected theme in local storage.                                                                                                         |

</details>

---

<details><summary>\src\users</summary>

| File              | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AvatarField.tsx   | The code defines a React component called AvatarField that renders an Avatar component from the MUI library, using the react-admin library for context and data. The component takes in props for size and sx styling, and uses the useRecordContext hook to retrieve the current record from the context. It then renders the Avatar component with the appropriate size and styling based on the record's avatar URL.                                                                                                                                                                        |
| FullNameField.tsx | The code defines a React component called FullNameField that renders a full name for a user, using the react-admin library. It takes in props for the user record and additional styling options, and returns a JSX element that displays the user's name with an avatar image.                                                                                                                                                                                                                                                                                                                |
| index.ts          | The code defines a resource object for the UserList, UserCreate, and UserEdit components, with an icon property set to VisitorIcon.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| MobileGrid.tsx    | The code defines a component called `MobileGrid` that displays a list of users in a grid format, using the `Card` and `CardHeader` components from the Material UI library. It also includes a `RoleField` component to display the user's role and an `EditButton` component to allow editing the user's information.                                                                                                                                                                                                                                                                         |
| RoleField.tsx     | The RoleField component from the react-admin library displays a Chip element with the user's role, obtained from the record context and translated using the useTranslate hook.                                                                                                                                                                                                                                                                                                                                                                                                                |
| RoleInput.tsx     | The code defines a custom input component for selecting a role in a React application, using the `SelectInput` component from the `react-admin` library and passing in a list of available roles as choices.                                                                                                                                                                                                                                                                                                                                                                                   |
| roles.ts          | The code defines an array of objects with IDs and names, where each object represents a role in the system.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| UserCreate.tsx    | The code defines a React component called UserCreate that renders a form for creating a new user using the react-admin library. The form includes a SimpleForm component with validation and a UserForm component that defines the fields to be displayed. The transform function is used to remove the confirm_password field from the data before it is sent to the server.                                                                                                                                                                                                                  |
| UserEdit.tsx      | The code defines a React component called `UserEdit` that renders an edit form for a user, using the `Edit` and `SimpleForm` components from the `react-admin` library.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| UserForm.tsx      | The code defines a React component called `UserForm` that renders a form for creating or editing a user, with fields for name, email, avatar, role, and password.                                                                                                                                                                                                                                                                                                                                                                                                                              |
| UserLinkField.tsx | The code defines a React component called UserLinkField that renders a link to the user's profile page, using the `react-admin` library.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| UserList.tsx      | The code defines a React component called `UserList` that renders a list of users using the `react-admin` library. The component uses the `useListContext` hook to access the current list of users and their selected status, and it also defines a custom filter component called `QuickFilter` that allows users to quickly filter the list by role or admin status. The component also includes a custom bulk action button component called `PostBulkActionButtons` that allows users to perform actions on multiple selected users at once, such as making them admins or regular users. |

</details>

---

<details><summary>\src\visitors</summary>

| File                       | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AddressField.tsx           | The code defines a React component called AddressField that retrieves the address, city, state, and zipcode of a customer from the record context using the useRecordContext hook from react-admin, and displays them in a formatted span element.                                                                                                                                                                                                                                                                          |
| Aside.tsx                  | The code defines a React component called `Aside` that displays a list of events for a customer, including orders and reviews. The component uses the `react-admin` library to fetch data from the API and display it in a timeline format. The `EventList` component is responsible for rendering the list of events, while the `Timeline` component is used to display the events in a vertical stepper format.                                                                                                           |
| AvatarField.tsx            | The code defines a React component called AvatarField that renders an Avatar component from the Material UI library, using the react-admin library for context and data. The component takes in props for size and sx styling, and uses the useRecordContext hook to retrieve the current record from the context. It then renders an Avatar component with the retrieved record's avatar image, size, and alt text.                                                                                                        |
| ColoredNumberField.tsx     | The ColoredNumberField component is a custom field for react-admin that displays the value of a record's source prop in red if it exceeds 500, otherwise it displays the value in the default color.                                                                                                                                                                                                                                                                                                                        |
| CustomerLinkField.tsx      | The code defines a React component called `CustomerLinkField` that renders a link to the customer's detail page, using the `react-admin` library.                                                                                                                                                                                                                                                                                                                                                                           |
| CustomerReferenceField.tsx | The code defines a custom `CustomerReferenceField` component that renders a `ReferenceField` with a `FullNameField` child, using the `react-admin` library.                                                                                                                                                                                                                                                                                                                                                                 |
| FullNameField.tsx          | The code defines a React component called FullNameField that displays the full name of a customer, using the react-admin library. It takes in props for the customer record and an optional size and sx prop for styling.                                                                                                                                                                                                                                                                                                   |
| index.ts                   | The code defines a resource object for the Visitor entity, which includes the list, create, edit, and icon components, as well as a recordRepresentation function to display the entity's name.                                                                                                                                                                                                                                                                                                                             |
| MobileGrid.tsx             | The code defines a React component called `MobileGrid` that renders a list of customer records in a grid format, using the `react-admin` library. The component uses the `useListContext` hook to fetch the list of customers and the `RecordContextProvider` component to provide the current record to its child components. It then maps over the list of customers and renders a `Card` component for each one, displaying the customer's name, last seen date, number of commands, total spent, and segments (if any). |
| SegmentInput.tsx           | The code defines a custom input component for the SegmentInput field in a React-admin application, which renders a select input with options from the segments data source.                                                                                                                                                                                                                                                                                                                                                 |
| segments.ts                | The code defines an array of segments and exports a mapped array of objects with the segment name capitalized.                                                                                                                                                                                                                                                                                                                                                                                                              |
| SegmentsField.tsx          | The code defines a React component called SegmentsField that renders a list of chips (small, clickable buttons) for each segment ID in the groups array of a customer record. The chips are labeled with the name of the corresponding segment, and the component uses the react-admin library to translate the segment names.                                                                                                                                                                                              |
| SegmentsInput.tsx          | The code defines a custom input component for the groups field in react-admin, which uses the SelectArrayInput component from react-admin and passes in a list of choices (segments) from a separate data file.                                                                                                                                                                                                                                                                                                             |
| VisitorCreate.tsx          | The code defines a React component called VisitorCreate, which is a form for creating a new customer in a fictional e-commerce application. The form includes fields for the customer's name, email, birthday, address, and password, as well as a validation function to ensure that all required fields are filled out correctly.                                                                                                                                                                                         |
| VisitorEdit.tsx            | The code defines a React component called VisitorEdit that renders an edit form for a visitor, allowing the user to update their personal information, including name, email, birthday, address, and password. The form is built using the react-admin library and includes validation for required fields.                                                                                                                                                                                                                 |
| VisitorList.tsx            | The code defines a React component called `VisitorList` that renders a list of visitors, with filters and sorting options. It uses the `useMediaQuery` hook from Material-UI to determine the screen size and adjust the layout accordingly.                                                                                                                                                                                                                                                                                |
| VisitorListAside.tsx       | The code defines a React component called Aside that renders a card with filters for the customers resource. The filters include options for last visited, has ordered, has newsletter, and group, each with their own icon and label. The component also imports various MUI components and uses the date-fns library to handle date calculations.                                                                                                                                                                         |

</details>

---

<details><summary>Root</summary>

| File           | Summary                                                                                                                                                |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| vite.config.ts | The code defines a Vite configuration file that sets up a development server with React support, proxying requests to a local API server at port 2999. |

</details>

---
