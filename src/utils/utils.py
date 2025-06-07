import os

MAX_ITERATIONS = 10

def display_scrollable_dropdown(job_titles: list[str], itr: int = 0) -> str:
    items_per_page = 10
    current_page = 0

    while itr < MAX_ITERATIONS:
        start_index = current_page * items_per_page
        end_index = min(start_index + items_per_page, len(job_titles))

        print("\n--- Options ---")
        for i in range(start_index, end_index):
            number = f"{i + 1}"
            zeros_needed = 3 - len(number)
            padded_number = "0" * zeros_needed + number
            print(f"{padded_number}. {job_titles[i]}")

        print("\n--- Navigation ---")
        if current_page > 0:
            print("p. Previous Page")
        if end_index < len(job_titles):
            print("n. Next Page")
        print("q. Quit")

        user_input = input(
            "Select an option (number), navigate (p/n), or quit (q): ")

        if user_input.isdigit():
            selected_index = int(user_input) - 1
            if start_index <= selected_index < end_index:
                return job_titles[selected_index]
            else:
                print("Invalid selection. Please try again.")
                continue
        elif user_input.lower() == "q":
            clear_console()
            break
        elif user_input.lower() == "p" and current_page > 0:
            clear_console()
            current_page -= 1
        elif user_input.lower() == "n" and end_index < len(job_titles):
            clear_console()
            current_page += 1
        else:
            clear_console()
            print("Invalid input. Please try again.")
            continue

def clear_console():
    os.system('cls' if os.name == 'nt' else 'clear')
