import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { lightGreen } from '@mui/material/colors';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {' '}
      <Link color="inherit" href="https://mui.com/">
       
      </Link>{' '}
    
      {'.'}
    </Typography>
  );
}

const theme = createTheme();
export function Login ({onSubmit, onChange}){

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={onSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="userid"
              label="사용자ID"
              name="userid"
              autoComplete="userid"
              onChange = {onChange}
              
             
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="비밀번호"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange = {onChange}
             
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="로그인정보저장"
            />
            <Button href="/auth/register"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
            >
              로그인
            </Button>
            <Grid container>
              <Grid item xs>
                <h5 variant="body2">
                  아직 회원이 아닙니까?
                </h5>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"회원가입하기"}
                </Link>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs>
                <h5 variant="body2">
                비밀번호를 잊었습니까?
                </h5>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" >
                  {"비밀번호 찾기"}
                </Link>
              </Grid>
            </Grid>
            <Button href="/auth/register"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 0 }}
            >
              네이버 계정으로 로그인
            </Button>
            <Button href="/auth/register"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 0.5, mb: 0 }}
            >
              카카오 계정으로 로그인
            </Button>
            <Button href="/auth/register"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 0.5, mb: 0 }}
            >
              구글 계정으로 로그인
            </Button>
            <Button href="/auth/register"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 0.5, mb: 0 }}
            >
              페이스북 계정으로 로그인
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 7, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
  