'use client';

import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Card, CardHeader, CardContent } from '@mui/material';

import { useSettingsContext } from 'src/components/settings';

import ChartArea from '../charts/chart-area';

// ----------------------------------------------------------------------

export default function NewsView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4"> News </Typography>

      <Box
        sx={{
          mt: 5,
          width: 1,
          height: 320,
          borderRadius: 2,
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
          border: (theme) => `dashed 1px ${theme.palette.divider}`,
        }}
      >
        <Card>
          <CardHeader title="Area" />
          <CardContent>
            <ChartArea
              series={[
                { name: 'series1', data: [31, 40, 28, 51, 42, 109, 100] },
                { name: 'series2', data: [11, 32, 45, 32, 34, 52, 41] },
              ]}
            />
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
