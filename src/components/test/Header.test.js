import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Header from "../Header";
import { MemoryRouter } from "react-router-dom";

test('if component is', () => {
    render(<Header />);
    
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
      render(<Header />, container);
    });
    expect(container.textContent).toBe("Hey, stranger");
  
    act(() => {
      render(<Header countItems="0" />, container);
    });
    expect(container.textContent).toBe("0");
  
    act(() => {
      render(<Header countItems="0" />, container);
    });
    expect(container.textContent).toBe("0");
  });