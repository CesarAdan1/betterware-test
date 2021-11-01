import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Item from "../Item";

test('if component is', () => {
    render(<Item />);
    
  });

let container = null
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  
  it("renderiza con o sin valor", () => {
    act(() => {
      render(<Item />, container);
    });
    expect(container.textContent).toBe("Hey, stranger");
  
    act(() => {
      render(<Item countItems="0" />, container);
    });
    expect(container.textContent).toBe("0");
  
    act(() => {
      render(<Item countItems="0" />, container);
    });
    expect(container.textContent).toBe("0");
  });