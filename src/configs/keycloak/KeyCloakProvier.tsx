'use client'
import React, { useEffect }from 'react';
import Keycloak, { KeycloakOnLoad } from 'keycloak-js';
import { getItemFromLocalStorage, removeItemFromLocalStorage, setItemToLocalStorage } from '../../utils/helpers';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { setAuthenticated } from '../store/slices/memberSlice';

export const getKcInstance: (onLoadType: KeycloakOnLoad) => Keycloak = (onLoadType) => {
  const keycloak: Keycloak = new Keycloak({
    url: process.env.NEXT_PUBLIC_KEYCLOAK_URL,
    realm: process.env.NEXT_PUBLIC_KEYCLOAK_REALM,
    clientId: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID,
  });
  keycloak.init({ onLoad: onLoadType });
  return keycloak;
}
export const getKcInstanceInited: (onLoadType: KeycloakOnLoad) => Promise<Keycloak> = async (onLoadType) => {
  const keycloak: Keycloak = new Keycloak({
    url: process.env.NEXT_PUBLIC_KEYCLOAK_URL,
    realm: process.env.NEXT_PUBLIC_KEYCLOAK_REALM,
    clientId: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID,
  });
  await keycloak.init({ onLoad: onLoadType });
  return keycloak;
}

export const KeycloakProvider = ({ children } : { children: React.ReactNode }) => {
  const authStatusChanging = getItemFromLocalStorage<boolean>('authStatusChanging', false);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if(getItemFromLocalStorage<boolean>('authStatusChanging', false)) {
      removeItemFromLocalStorage('authStatusChanging');
      getKcInstanceInited('check-sso').then((keycloak) => {
        dispatch(setAuthenticated(keycloak.authenticated?? false));
        setItemToLocalStorage<boolean>('authenticated', keycloak.authenticated?? false);
        console.log(keycloak);
      }).catch((e) => { console.error(e); });
    }
  }, [authStatusChanging]);
  return <>{children}</>
}

