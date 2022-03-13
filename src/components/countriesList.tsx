import * as React from 'react';
import { Country } from '../types';
import { Grid, Chip, Card, Typography, CardHeader, CardContent, Divider } from '@mui/material';

const classes = {
  card: {
    borderRadius: 12,
    minWidth: 256,
    textAlign: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
  },
  statLabel: {
    fontSize: 12,
    color: 'red',
    fontWeight: 500,
    margin: 0,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    letterSpacing: '1px',
  },
};

export interface CountriesListProps {
  countries: Country[];
}

export default function CountriesList({ countries }: CountriesListProps) {
  return (
    <Grid container spacing={2}>
      {countries.map(({ code, name, continent, emoji, languages }: Country) => (
        <Grid item key={code} xs={12} sm={6} md={4} lg={3}>
          <Card classes={classes.card} raised={true}>
            <CardHeader title={<Typography variant='h6'>{name}</Typography>} component='h6' avatar={emoji} />
            <CardContent component='div'>
              <Typography variant='caption'>Continent</Typography>
              <Typography variant='body1'>{continent.name}</Typography>
              <Typography variant='caption'>Languages</Typography>
              {languages.map(({ code, name }) => (
                <Chip label={name} size='small' key={code} />
              ))}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
