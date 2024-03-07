import { Suspense, lazy, useState } from "react";
// import Forms from "./forms";

const Form = lazy( ()=> import('./forms') );

function LazyLoading() {

    const [show, setState] = useState(false);

    return(
        <>
          <div className="text-center">
            <h1 className="text-primary">Lazy Loading in React</h1>
            <button className="btn btn-primary" onClick={() => setState((prevState) => !prevState)}>
                {show ? 'Hide' : 'Open'}
            </button>
          </div>
         {
            show && (
                <Suspense>
                    <Form />
                </Suspense>
            )
         }
        </>
    )
}

export default LazyLoading

/**
 * We can implement Lazy Loading in React in different way
 * 1. With Conditional Rendering
 * 2. With Routing
 */