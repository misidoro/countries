import * as React from 'react';
import { useQuery } from '@apollo/client';
import PublicIcon from '@mui/icons-material/Public';
import Pagination from 'components/pagination';
import CountriesList from 'components/countriesList';
import { COUNTRIES } from 'graphql/queries';
import { getItemsForPage } from 'utils/pagination';
import Layout from 'components/layout';

const ITEMS_PER_PAGE = 9;

export default function App() {
  const [page, setPage] = React.useState(1);
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const { loading, error, data } = useQuery(COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Layout>
      <h1>
        List of countries <PublicIcon />
      </h1>
      <CountriesList countries={getItemsForPage(data.countries, page, ITEMS_PER_PAGE)} />
      <Pagination
        totalItems={data.countries.length}
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={page}
        handlePageChange={handlePageChange}
      />
    </Layout>
  );
}
