import { useRef, lazy, Suspense } from 'react'
import AppController from './AppController'
import './index.css'
const Modal = lazy(() => import('./Modal/emptymodal'))

function App() {
     const c = new AppController()
     const modalRef = useRef('')
     return (
          <Suspense fallback={<div>Loading...</div>}>
               <section className="container">
                    <header>
                         <h1>Book List</h1>
                    </header>

                    <article className="book-container">
                         <div
                              onClick={() => c.openModal(modalRef)}
                              className="card"
                         >
                              <h1>Book Name</h1>
                         </div>

                         <div className="card">
                              <h1>Book Name</h1>
                         </div>
                    </article>

                    <Modal showModal={modalRef} />
               </section>
          </Suspense>
     )
}

export default App
