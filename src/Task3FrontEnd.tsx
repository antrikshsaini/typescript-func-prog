//////////// HeyAuto in yd-buyer views SignInUpSocialsV2.tsx ///////////////////////////

import {Grid, GridProps} from '@material-ui/core';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import {
  Button,
  ButtonProps,
  FacebookRounded,
  GoogleLogo,
} from '@vividtheory/ha-ui';
import {HEYAUTO_DOT_COM} from '@vividtheory/ha-utils';
import {compose, pipe} from 'ramda';
import {Fragment} from 'react';
import {ReactFacebookLoginInfo} from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import {useDispatch} from 'react-redux';

import {AnalyticEvents} from '../../common/util/InitAnalytics';
import {FACEBOOK_APP_ID} from '../../common/util/url';
import {actions as modalActions} from '../../modal/redux/model';
import {actions as userActions} from '../../user/redux/model';
import Failure from '../components/Failure';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btn: {
      '&&': {
        paddingRight: theme.spacing(1),
        paddingLeft: theme.spacing(4),
        display: 'flex',
        justifyContent: 'flex-start',
        borderWidth: '1px',
        '&:hover': {
          borderWidth: '1px',
        },
        '&:disabled': {
          borderWidth: '1px',
          borderColor: theme.palette.surface.secondaryLighter,
          color: theme.palette.text.secondaryLighter,
        },
      },
    },
  })
);

interface ISignInUpSocials extends ButtonProps {
  readonly aModal: boolean;
  readonly signInUp: 'Sign Up' | 'Sign In';
  readonly btnGridProps?: GridProps;
  readonly facebookTxt?: string;
  readonly googleTxt?: string;
}

const SignInUpSocials = ({
  id,
  aModal,
  signInUp,
  btnGridProps,
  facebookTxt,
  googleTxt,
}: ISignInUpSocials) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  /////////////////////////////////// Before /////////////////////////////////////////////////

  const ResponseFacebook = (response: ReactFacebookLoginInfo) => {
    if (response.email && response.name)
      dispatch(
        userActions.verifyUserFacebook({
          facebookInfo: {
            name: response.name,
            email: response.email,
            id: response.id,
            userId: response.userID,
            accessToken: response.accessToken,
            picture: response.picture?.data.url,
          },
        })
      );

    if (aModal) {
      dispatch(modalActions.closeModal());
    }
  };

  const GoogleResponse = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    const resp = response as GoogleLoginResponse;
    const tokenId = resp.tokenId;
    dispatch(
      userActions.verifyUser({
        oAuthTokenInput: {accessToken: tokenId},
      })
    );
    if (aModal) {
      dispatch(modalActions.closeModal());
    }
    return null;
  };

  ////////////////////////////////////////// Reduced and Refactored used Compose ///////////////////////////////////////////////////////////////

  const ResponseFacebook = (response: ReactFacebookLoginInfo) => {
    if (response.email && response.name) {
      compose(
        dispatch,
        userActions.verifyUserFacebook
      )({
        facebookInfo: {
          name: response.name,
          email: response.email,
          id: response.id,
          userId: response.userID,
          accessToken: response.accessToken,
          picture: response.picture?.data.url,
        },
      });
    }
    if (aModal) {
      compose(dispatch, modalActions.closeModal);
    }
  };

  type Either = GoogleLoginResponse | GoogleLoginResponseOffline;

  const GoogleResponse = <T extends Either>(response: T) => {
    const tokenId: string = response.tokenId;
    pipe(
      userActions.verifyUser,
      dispatch
    )({oAuthTokenInput: {accessToken: tokenId}});

    if (aModal) {
      pipe(modalActions.closeModal, dispatch);
    }
    return null;
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <>
      <Grid
        container
        alignItems="center"
        className={
          signInUp === 'Sign In' ? AnalyticEvents.signIn : AnalyticEvents.signUp
        }
        {...btnGridProps}
      >
        <FacebookLogin
          appId={FACEBOOK_APP_ID}
          redirectUri={HEYAUTO_DOT_COM}
          autoLoad={false}
          fields="name,email,picture"
          callback={ResponseFacebook}
          onFailure={() => {
            Failure(dispatch, 'Facebook');
          }}
          disableMobileRedirect
          render={renderProps => {
            return (
              <Button
                id={`${id}-facebook`}
                color="info"
                fullWidth
                onClick={renderProps.onClick}
                startIcon={<FacebookRounded style={{fontSize: '25px'}} />}
                className={classes.btn}
              >
                {facebookTxt || 'Continue with Facebook'}
              </Button>
            );
          }}
        />
      </Grid>
      <Grid
        container
        alignItems="center"
        className={
          signInUp === 'Sign In' ? AnalyticEvents.signIn : AnalyticEvents.signUp
        }
        {...btnGridProps}
      >
        <GoogleLogin
          clientId="314582783214-gs8mmfcfr91tqs4kbfn77nokvgvddlv5.apps.googleusercontent.com"
          render={renderProps => {
            return (
              <Button
                id={`${id}-google`}
                variant="border"
                color="element"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<GoogleLogo style={{fontSize: '25px'}} />}
                className={classes.btn}
              >
                {googleTxt || `${signInUp} with Google`}
              </Button>
            );
          }}
          onSuccess={GoogleResponse}
          onFailure={_e => {
            if (_e.error !== 'popup_closed_by_user') {
              Failure(dispatch, 'Google');
            }
          }}
          cookiePolicy={'single_host_origin'}
        />
      </Grid>
    </>
  );
};

export default SignInUpSocials;
