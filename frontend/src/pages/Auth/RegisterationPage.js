import React from 'react';
import RegistrationForm from '../../components/Auth/RegistrationForm';
import styled from '@emotion/styled';


const RegisterFormContainer = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    background-color: #f5f5f5;
`;

const CenteredForm = styled.div`
    width: 400px;
    min-height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    /* Added styles */
    background: #fff;
    border: 2px solid #ddd;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 15px rgba(0,0,0,0.15);
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export default function LoginPage() {
    return (
        <>
            <RegisterFormContainer>
                <CenteredForm>
                    <RegistrationForm/>
                </CenteredForm>
            </RegisterFormContainer>
        </>
    );
}
