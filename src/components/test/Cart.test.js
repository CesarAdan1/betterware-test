import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Cart from "../Cart";
import { MemoryRouter } from "react-router-dom";

test('if component is', () => {
    render(<Cart />);
    
  });

it("navigates to CartView when you click the logo", async => {

    const root = document.createElement('div');
    document.body.appendChild(root);
  
    render(
      <MemoryRouter initialEntries={['/cart']}>
        <Cart />
      </MemoryRouter>,
      root
    );
  
    // Interact with page
    act(() => {
      // Find the link (perhaps using the text content)
      const goHomeLink = document.querySelector('#nav-logo-home');
      // Click it
      goHomeLink.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
  
    // Check correct page content showed up
    expect(document.body.textContent).toBe("CartView");
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
      render(<Cart />, container);
    });
    expect(container.textContent).toBe("0");
  
    act(() => {
      render(<Cart countItems="0" />, container);
    });
    expect(container.textContent).toBe("0");
  
    act(() => {
      render(<Cart countItems="0" />, container);
    });
    expect(container.textContent).toBe("0");
  });