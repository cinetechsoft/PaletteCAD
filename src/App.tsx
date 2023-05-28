import { Suspense, useState } from 'react';
import {
  AppShell,
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';
import AppNavbar from './components/common/Layout/AppNavbar';
import { Outlet } from 'react-router-dom';

export default function App() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          transition: `all 0.5s`
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <AppNavbar opened={!opened} />
      }
      /* aside={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Text>Application sidebar</Text>
          </Aside>
        </MediaQuery>
      } */
      /* footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      } */
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>PalleteCAD Quotation</Text>
          </div>
        </Header>
      }
    >
      <Suspense fallback={<div>Loading</div>}>
        <Outlet />
      </Suspense>
    </AppShell>
  );
}