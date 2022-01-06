import React , {Component} from 'react'

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

//Background Image
    import HeaderImage from '../Images/background.png'
    import header from "./header.scss"

export default class Header extends Component {
    
    render(){
        const Item = styled(Paper)(({ theme }) => ({
            ...theme.typography.body2,
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
          }));
        return(
            <header className="container-fluid">
                <Box sx={{flexGrow:1}}>
                    <Grid container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item xs>
                                <Item>
                                    <img src={HeaderImage} alt="Logo" title="logo"/>
                                </Item>

                                <Item>
                                    <Typography variant="h6" component="div" gutterBottom>
                                        Your Resuls is:&nbsp;&nbsp;
                                        <span className="result">0</span>
                                    </Typography>
                                </Item>
                        </Grid>
                    </Grid>
                </Box>
            </header>
        )
    }
}
