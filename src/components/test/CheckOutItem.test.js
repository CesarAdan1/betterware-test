import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import {CheckOutItem} from "../CheckOutItem";

test('if component is', () => {
    render(<CheckOutItem />);
    
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
      render(<CheckOutItem />, container);
    });
    expect(container.textContent).toBe("Hey, stranger");
  
    act(() => {
      render(<CheckOutItem countItems="0" />, container);
    });
    expect(container.textContent).toBe("0");
  
    act(() => {
      render(<CheckOutItem countItems="0" />, container);
    });
    expect(container.textContent).toBe("0");
  });