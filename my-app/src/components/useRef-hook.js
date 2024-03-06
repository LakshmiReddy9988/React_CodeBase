import "./useRef-hook.css";
const { useRef } = require("react");

function UseRefHook() {
  /**
   * useRef is a hook only available in functional components
   * It is used to refer(access) dom elements
   * Its data preserved even component rerenders
   * For single element we can use ref directly
   * For multiple elements we need to assign the element at particular index
   */

  let headings = useRef([]);
  let p = useRef();

  let arr = new Array(3).fill(null);

  function changeStyle(e) {
    for (let ele of headings.current) {
      ele.classList.remove("primary");
    }
    e.target.classList.add("primary");
  }

  return (
    <>
      {arr.map((ele, index) => {
        return (
          <h1 key={index}
            ref={(el) => (headings.current[index] = el)}
            onClick={(e) => {
              console.log(headings);
              console.log(headings.current);
              changeStyle(e);
            }}
          >
            This is heading{index+1}
          </h1>
        );
      })}
      <p ref={p} onClick={() => {
        console.log(p);
        console.log(p.current)
      }}>This is paragraph</p>
    </>
  );
}

export default UseRefHook;
