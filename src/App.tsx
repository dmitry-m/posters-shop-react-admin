import {
  Admin,
  CustomRoutes,
  Resource,
  localStorageStore,
  useStore,
  StoreContextProvider,
  Authenticated,
} from "react-admin";
import { Route } from "react-router";

import categories from "./categories";
import { Dashboard } from "./dashboard";
import { i18nProvider } from "./i18n";
import invoices from "./invoices";
import { Layout, Login, Register } from "./layout";
import orders from "./orders";
import products from "./products";
import { authProvider, dataProvider } from "./providers";
import reviews from "./reviews";
import Segments from "./segments/Segments";
import { themes, ThemeName } from "./themes/themes";
import users from "./users";
import visitors from "./visitors";

const store = localStorageStore(undefined, "React Admin Panel");

const AdminApp = () => {
  const [themeName] = useStore<ThemeName>("themeName");
  const lightTheme = themes.find((theme) => theme.name === themeName)?.light;
  const darkTheme = themes.find((theme) => theme.name === themeName)?.dark;

  return (
    <Admin
      title="Posters Shop"
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
    >
      {(permissions) => (
        <>
          <CustomRoutes noLayout>
            <Route path="/register" element={<Register />} />
          </CustomRoutes>
          <CustomRoutes>
            <Route
              path="/segments"
              element={
                <Authenticated requireAuth>
                  <Segments />
                </Authenticated>
              }
            />
          </CustomRoutes>
          {permissions === "admin" && (
            <>
              <Resource name="customers" {...visitors} />
              <Resource name="users" {...users} />
              <Resource name="commands" {...orders} options={{ label: "Orders" }} />
              <Resource name="invoices" {...invoices} />
              <Resource name="products" {...products} />
              <Resource name="categories" {...categories} />
              <Resource name="reviews" {...reviews} />
            </>
          )}
        </>
      )}
    </Admin>
  );
};

export const App = () => (
  <StoreContextProvider value={store}>
    <AdminApp />
  </StoreContextProvider>
);

export default App;
