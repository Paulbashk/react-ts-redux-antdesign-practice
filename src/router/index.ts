import React from "react";
import Event from "../pages/Event";
import Login from "../pages/Login";

export interface IRoute {
  path: string;
  element: React.ComponentType;
  auth?: boolean;
  authType?: boolean;
}

export enum RouteNames {
  LOGIN = '/login',
  EVENT = '/'
}

export const routes: IRoute[] = [
  { path: RouteNames.LOGIN, element: Login, auth: true, authType: false },
  { path: RouteNames.EVENT, element: Event, auth: true, authType: true },
]