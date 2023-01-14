import { Card, CardContent, Paper, Typography } from '@mui/material';

const CategoryList = () => {
  return (
    <Paper sx={{ ml: '16px', mt: '8px' }}>
      <Card>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant='h5'>CATEGORIES</Typography>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default CategoryList;
