import { render } from "@testing-library/react";
import Cart from "../Cart";

test('renders Cart', () => {
    const { getByText } = render(<Cart />);
    const linkToCart = getByText(/cart/i);
    
    expect(linkToCart).toBeInTheDocument();
})