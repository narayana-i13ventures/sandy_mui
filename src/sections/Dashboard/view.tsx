'use client';

import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Card, Stack, useTheme, CardHeader, CardContent } from '@mui/material';

import { _appInstalled } from 'src/_mock';

import { useSettingsContext } from 'src/components/settings';

import AppWidget from './app-widget';
import ChartBar from '../charts/chart-bar';
import ChartPie from '../charts/chart-pie';
import ChartArea from '../charts/chart-area';
import AppWidgetSummary from './app-widget-summary';
import AppTopInstalledCountries from './app-top-installed-countries';

// ----------------------------------------------------------------------
function generateRandomTransactionValues(count: number) {
  const values = [];
  // eslint-disable-next-line no-plusplus
  for (let i: number = 0; i < count; i++) {
    values.push(Math.floor(Math.random() * 100) + 1); // Generate random numbers between 1 and 100
  }
  return values;
}
export default function DashboardView() {
  const settings = useSettingsContext();
  const theme = useTheme();
  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4">Dashboard</Typography>

      <Box
        sx={{
          mt: 2,
          width: 1,
          borderRadius: 2,
          bgcolor: alpha(theme.palette.grey[500], 0.04),
          border: `dashed 1px ${theme.palette.divider}`,
        }}
      >
        <Stack
          spacing={2}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          sx={{ px: 3, py: 2 }}
        >
          <AppWidgetSummary
            title="Total Revenue"
            percent={0.2}
            total={4876}
            chart={{
              colors: [theme.palette.info.light, theme.palette.info.main],
              series: [20, 41, 63, 33, 28, 35, 50, 46, 11, 26],
            }}
          />
          <AppWidgetSummary
            title="Total Active Users"
            percent={2.6}
            total={18765}
            chart={{
              series: [5, 18, 12, 51, 68, 11, 39, 37, 27, 20],
            }}
          />
          <AppWidgetSummary
            title="Total Downloads"
            percent={-0.1}
            total={678}
            chart={{
              colors: [theme.palette.warning.light, theme.palette.warning.main],
              series: [8, 9, 31, 8, 16, 37, 8, 33, 46, 31],
            }}
          />
        </Stack>
        <Stack
          spacing={2}
          direction="row"
          flexWrap="wrap"
          justifyContent="space-between"
          sx={{ px: 3, py: 2 }}
        >
          <Card sx={{ width: '49%' }}>
            <CardHeader title="Transactions" />
            <CardContent>
              <ChartArea
                series={[
                  { name: 'January', data: generateRandomTransactionValues(31) },
                  { name: 'February', data: generateRandomTransactionValues(28) },
                ]}
              />
            </CardContent>
          </Card>
          <Card sx={{ width: '49%' }}>
            <CardHeader title="Income by Location (2024)" />
            <CardContent>
              <ChartBar
                series={[
                  { name: 'Amount', data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380] },
                ]}
              />
            </CardContent>
          </Card>
          <Card sx={{ width: '49%' }}>
            <CardHeader title="Revenue by Category" />
            <CardContent
              sx={{
                height: 420,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ChartPie series={[44, 55, 13, 43]} />
            </CardContent>
          </Card>
          <Stack
            component="div"
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
            sx={{ width: '49%' }}
          >
            <AppTopInstalledCountries title="Top Installed Countries" list={_appInstalled} />
            <AppWidget
              title="Conversion"
              total={38566}
              icon="solar:user-rounded-bold"
              chart={{
                series: 48,
              }}
            />
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}
