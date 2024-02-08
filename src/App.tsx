import {
  Admin,
  CustomRoutes,
  Resource,
  localStorageStore,
  useStore,
  StoreContextProvider,
  fetchUtils,
  Options,
} from "react-admin";
import { Route } from "react-router";

import authProvider, { authProviderFactory } from "./authProvider";
import categories from "./categories";
import { Dashboard } from "./dashboard";
// import dataProviderFactory from "./dataProvider";
import { dataProviderFactory, dataProvider } from "./JWTdataProvider";
import invoices from "./invoices";
import { Layout, Login } from "./layout";
import orders from "./orders";
import products from "./products";
import reviews from "./reviews";
import Segments from "./segments/Segments";
import visitors from "./visitors";
import { themes, ThemeName } from "./themes/themes";
import { i18nProvider } from "./i18n";
import { AuthInterface } from "./types";

const store = localStorageStore(undefined, "React Admin Panel");

const AdminApp = () => {
  const [themeName] = useStore<ThemeName>("themeName", "soft");
  const lightTheme = themes.find((theme) => theme.name === themeName)?.light;
  const darkTheme = themes.find((theme) => theme.name === themeName)?.dark;

  return (
    <Admin
      title=""
      dataProvider={dataProvider}
      store={store}
      authProvider={authProvider}
      dashboard={Dashboard}
      loginPage={Login}
      layout={Layout}
      i18nProvider={i18nProvider}
      disableTelemetry
      lightTheme={lightTheme}
      darkTheme={darkTheme}
      defaultTheme="light"
    >
      <CustomRoutes>
        <Route path="/segments" element={<Segments />} />
      </CustomRoutes>
      <Resource name="customers" {...visitors} />
      <Resource name="commands" {...orders} options={{ label: "Orders" }} />
      <Resource name="invoices" {...invoices} />
      <Resource name="products" {...products} />
      <Resource name="categories" {...categories} />
      <Resource name="reviews" {...reviews} />
    </Admin>
  );
};

export const App = () => (
  <StoreContextProvider value={store}>
    <AdminApp />
  </StoreContextProvider>
);

export default App;
