import { NextRequest, NextResponse } from "next/server";
import i18nMiddleware from "./i18nConfig/i18nMiddleware";
import { useSelector } from "react-redux";
import { RootState } from "./app/ReduxConfig/store";

const middleware = async (request: NextRequest) => {
  // await i18nMiddleware(request);
  // const defaultLocale: string = useSelector((state: RootState) => state.locale);
  // if (request.url === '/') {
  //   return NextResponse.redirect(`/${defaultLocale}`);
  // }
  // return request;
  return NextResponse.redirect(new URL('/zh-TW', request.url));
};

export default middleware;

export const config = {
  matcher: '/'
};