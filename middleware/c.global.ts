export default defineNuxtRouteMiddleware((to, from) => {
  const modal = useModalStore();
  modal.close();
});
