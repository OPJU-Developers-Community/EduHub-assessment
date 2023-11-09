import React from 'react'
import { LoginBox, 
    LoginWrapper, 
    LeftSection, 
    RightSection, 
    Title, 
    Label, 
    InputField, 
    ForgetPassBtn, 
    RememberMeBtn,
    ButtonWrapper,
    SignInButton,
    SubTitle,
    SignUpButton} from './LoginStyle';

    import Image from "next/image";
    import LoginSvg from "public/login.svg";

export default function Login() {
  return (
    <>  
        <LoginWrapper>
            <LeftSection>
                <Image src={LoginSvg} alt="login-img" width={800} height={750} layout="fixed" />
            </LeftSection>
            <RightSection>
                <LoginBox>
                    <Title>Sign in</Title>
                    
                    <Label for="standard-basic-email">Email</Label>
                    <InputField 
                        id="standard-basic-email"
                        variant="outlined"
                        name="email"
                    />
                    <Label for="standard-basic-password">Password</Label>
                    <InputField 
                        id="standard-basic-password"
                        variant="outlined"
                        type="password"
                        name="password"
                    />
                    <ButtonWrapper>
                        <RememberMeBtn variant="text" size="small" disableRipple>
                            Remember me
                        </RememberMeBtn>
                        <ForgetPassBtn variant ="text" size="small" disableRipple>
                            Forget Password
                        </ForgetPassBtn>
                    </ButtonWrapper>
                    <SignInButton variant="standard">
                        Sign in
                    </SignInButton>
                    <SubTitle>Don't have an account?
                        <SignUpButton disableRipple>Sign up</SignUpButton>
                    </SubTitle>
                </LoginBox>
            </RightSection>
        </LoginWrapper>
    </>
  )
}

