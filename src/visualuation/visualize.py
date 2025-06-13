import matplotlib.pyplot as plt

import src.elevate.evaluate as evaluate


def visualize_results(file_path: str):
    categories, values = evaluate.calculate_job_demand_for_user(
        file_path)
    
    plt.rcParams.update({'font.size': 22})
    plt.barh(categories, width=values, color="skyblue")
    plt.ylabel("Job Titles")
    plt.xlabel("Employment Change % (2023 - 2033)")
    plt.title("Demand for Jobs You Picked")
    plt.grid(True, linestyle="--", alpha=1)
    plt.show()
