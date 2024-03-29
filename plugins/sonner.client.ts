// plugins/sonner.client.ts
// import { Toaster, toast } from 'vue-sonner'

// export default defineNuxtPlugin((nuxtApp) => {
//   nuxtApp.vueApp.component('Toaster', Toaster)

//   return {
//     provide: {
//       toast,
//     },
//   }
// })

export default defineNuxtPlugin(() => {
  // do not register the 'Toaster' component here
  return { provide: { toast } }
})
