// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------

export const paths = {
  minimalUI: 'https://mui.com/store/items/minimal-dashboard/',
  // AUTH
  auth: {
    jwt: {
      login: `${ROOTS.AUTH}/jwt/login`,
      register: `${ROOTS.AUTH}/jwt/register`,
    },
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    one: `${ROOTS.DASHBOARD}/one`,
    two: `${ROOTS.DASHBOARD}/two`,
    three: `${ROOTS.DASHBOARD}/three`,
    News: `${ROOTS.DASHBOARD}/News`,
    Transactions: `${ROOTS.DASHBOARD}/Transactions`,
    Reports: `${ROOTS.DASHBOARD}/Reports`,
    Settings: `${ROOTS.DASHBOARD}/Settings`,
    Investments: `${ROOTS.DASHBOARD}/Investments`,
    Accounts: `${ROOTS.DASHBOARD}/Accounts`,
    Plan: `${ROOTS.DASHBOARD}/Plan`,
    Recurring: `${ROOTS.DASHBOARD}/Recurring`,
    Sandy: `${ROOTS.DASHBOARD}/Sandy`,
    group: {
      root: `${ROOTS.DASHBOARD}/group`,
      five: `${ROOTS.DASHBOARD}/group/five`,
      six: `${ROOTS.DASHBOARD}/group/six`,
    },
  },
};
