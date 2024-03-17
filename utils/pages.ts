interface Page {
  name: string;
  path: string;
}
var pages = new Map<string, Page>();

const ACCOUNT: Page = {
  name: "Account",
  path: "/account",
};
const LOGIN: Page = {
  name: "Login",
  path: "/login",
};
const ORGANIZATION: Page = {
  name: "Organization",
  path: "/org",
};
const USER: Page = {
  name: "User",
  path: "/user",
};
enum Pages {
  ACCOUNT,
  LOGIN,
  ORGANIZATION,
  USER
}
pages.set(Pages.ACCOUNT.toString(), ACCOUNT);
pages.set(Pages.LOGIN.toString(), LOGIN);
pages.set(Pages.ORGANIZATION.toString(), ORGANIZATION);
pages.set(Pages.USER.toString(), USER);
function pagePath(pageID: Pages) {
  return pages.get(pageID.toString())?.path;
}
function pageName(pageID: Pages) {
  return pages.get(pageID.toString())?.name;
}
export { pages, pageName, Pages, pagePath };
