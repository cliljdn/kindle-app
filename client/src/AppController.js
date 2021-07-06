export default class AppController {
     openModal = (ref) => {
          if (ref.current === null) {
               return
          } else {
               ref.current.style.display = 'block'
          }
     }
}
