import NewsView from 'src/sections/News/view';
import OneView from 'src/sections/Dashboard/view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Dashboard: News',
};

export default function Page() {
  return <NewsView />;
}
