import { Country } from '../types';
import { Grid, Chip, Card, Typography, CardHeader, CardContent } from '@mui/material';

export interface CountriesListProps {
  countries: Country[];
}

export default function CountriesList({ countries }: CountriesListProps) {
  return (
    <Grid container spacing={2}>
      {countries.map(({ code, name, continent, emoji, languages }: Country) => (
        <Grid item key={code} xs={12} sm={6} md={4} lg={3}>
          <Card raised={true}>
            <CardHeader
              sx={{ margin: 0 }}
              title={<Typography variant='h6'>{name}</Typography>}
              component='h6'
              avatar={emoji}
            />
            <CardContent component='div'>
              <Typography variant='caption'>Continent</Typography>
              <Typography variant='body1'>{continent.name}</Typography>
              <Typography variant='caption'>Languages</Typography>
              {languages.map(({ code, name }) => (
                <Chip label={name} size='small' key={code} sx={{ margin: 0.25 }} />
              ))}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
