import * as React from 'react';

export interface CountriesListProps {
  totalItems: number;
}

export default function Pagination({ totalItems }: CountriesListProps) {
  return <div>{totalItems}</div>;
}
