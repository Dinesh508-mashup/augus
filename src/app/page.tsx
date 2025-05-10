// This page is largely superseded by the /(app) group and middleware redirects.
// Middleware handles directing users to /sign-up or the main app based on auth state.
// We render null here to avoid unnecessary checks or rendering default content.
export default function RootPage() {
  return null;
}
