import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import BasicTextFields from '../components/Form';
import BasicTable from '../components/GridHome';
import SimplePaper from '../components/Overview';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function ResponsiveGrid() {
  return (
    <div style={{display:'flex', flexDirection:'row', flexGrow: 1 }}>
      <BasicTextFields/>
      <BasicTable />
      <SimplePaper total={150}/>
    </div>
  );
}
