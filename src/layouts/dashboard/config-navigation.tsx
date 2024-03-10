import { useMemo } from 'react';

import SettingsIcon from '@mui/icons-material/Settings';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

import { paths } from 'src/routes/paths';

import SvgColor from 'src/components/svg-color';
// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
  // OR
  // <Iconify icon="fluent:mail-24-filled" />
  // https://icon-sets.iconify.design/solar/
  // https://www.streamlinehq.com/icons
);

const ICONS = {
  job: icon('ic_job'),
  blog: icon('ic_blog'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  tour: icon('ic_tour'),
  order: icon('ic_order'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  product: icon('ic_product'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
  news: <NewspaperIcon />,
  settings: <SettingsIcon />,
  receipt: <ReceiptLongIcon />
};

// ----------------------------------------------------------------------

export function useNavData() {
  const data = useMemo(
    () => [
      // OVERVIEW
      // ----------------------------------------------------------------------
      {
        subheader: '',
        items: [
          { title: 'News', path: paths.dashboard.News, icon: ICONS.news },
          { title: 'Reports', path: paths.dashboard.Reports, icon: ICONS.analytics },
          { title: 'Plan', path: paths.dashboard.Plan, icon: ICONS.kanban },
          { title: 'Investments', path: paths.dashboard.Investments, icon: ICONS.banking },
          { title: 'Transactions', path: paths.dashboard.Transactions, icon: ICONS.receipt },
          { title: 'Settings', path: paths.dashboard.Settings, icon: ICONS.settings },
          { title: 'Sandy', path: paths.dashboard.Sandy, icon: ICONS.tour },
        ],
      },

      // MANAGEMENT
      // ----------------------------------------------------------------------
      {
        subheader: 'management',
        items: [
          {
            title: 'user',
            path: paths.dashboard.group.root,
            icon: ICONS.user,
            children: [
              { title: 'four', path: paths.dashboard.group.root },
              { title: 'five', path: paths.dashboard.group.five },
              { title: 'six', path: paths.dashboard.group.six },
            ],
          },
        ],
      },
    ],
    []
  );

  return data;
}
