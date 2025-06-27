import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";
// import {redirect} from 'next/navigation'

export async function GET(request: NextRequest) {
  // const requestHeaders = new Headers(request.headers);
  // console.log(requestHeaders.get("Authorization"))

  //   redirect('/');

  const headerList = await headers();
  console.log(headerList.get("Authorization"));

  const theme = request.cookies.get("theme");
  console.log(theme)

  const cookiesStore = await cookies();
  cookiesStore.set("resultsPerPage", "20");

  return new Response("<h1>Profile API Data</h1>", {
    headers: { "Content-type": "text/html" ,
        "Set-Cookie": "theme=dark",
    },
  });
}
