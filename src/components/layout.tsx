import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Box sx={{ height: '100vh' }}>{children}</Box>
    </Container>
  );
}
