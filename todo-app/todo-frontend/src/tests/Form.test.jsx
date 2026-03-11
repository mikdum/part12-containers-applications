import { render,screen } from "@testing-library/react";
import { describe, it, expect, vi} from "vitest";
import userEvent from "@testing-library/user-event"
import Form from '../Todos/Form'
describe("Form component", () => {
	it("should render a Form component", async () => {
		const createTodo = vi.fn()

		render(<Form createTodo={createTodo}/>)
		// expect(createTodo).toHaveBeenCalled()
		// screen.debug()
		const input=screen.getByRole("textbox")
		const button = screen.getByRole("button")

		await userEvent.type(input, "Learn testing")
		await userEvent.click(button)
		expect(createTodo).toHaveBeenCalledTimes(1)
		expect(input).toBeVisible()

	})
})