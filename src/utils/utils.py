import os

MAX_ITERATIONS = 10


def display_scrollable_dropdown(job_titles: list[str]) -> list[str]:
    items_per_page = 10
    user_jobs = []
    current_page = 0
    itr = 0

    while itr < MAX_ITERATIONS:
        print("\n")
        if itr == 0:
            print(f"Select your top job title you want and think you'd be good at:")
        elif itr == 1:
            print(f"Select your 2nd top job title you want and think you'd be good at:")
        elif itr == 2:
            print(f"Select your 3rd top job title you want and think you'd be good at:")
        else:
            print(
                f"Select your {itr + 1}th top job title you want and think you'd be good at:")

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
                user_jobs.append(job_titles[selected_index])
                itr += 1
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
    return user_jobs


def clear_console():
    os.system('cls' if os.name == 'nt' else 'clear')
