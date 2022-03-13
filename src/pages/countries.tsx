import * as React from 'react';
import { useQuery } from '@apollo/client';
import PublicIcon from '@mui/icons-material/Public';
import Pagination from 'components/pagination';
import CountriesList from 'components/countriesList';
import { COUNTRIES } from 'graphql/queries';

export interface CountriesProps {}

export default function App(props: CountriesProps) {
  const [page, setPage] = React.useState(1);

  const { loading, error, data } = useQuery(COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <h1>
        List of countries <PublicIcon />
      </h1>
      <CountriesList countries={data.countries} />
      <Pagination totalItems={data.countries.length} />
    </>
  );
}
