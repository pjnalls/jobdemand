import csv

import src.preprocess.dataset as preprocess
import src.utils.utils as utils


def read_employment_change(file_path: str):
    job_titles = []
    employment_change = []
    with open(file_path, 'r', newline='') as file:
        csv_reader = csv.reader(file)
        for row in csv_reader:
            job_titles.append(row[0].split("[")[0])
            employment_change.append(row[5])
    return job_titles[3:-3], employment_change[3:-3]


def get_top_jobs_of_user(file_path: str) -> tuple[list[str], list[str], list[str]]:
    job_titles, employment_change = preprocess.read_employment_change(
        file_path)
    sorted_job_titles = sorted(job_titles)
    desired_jobs = []
    i = 0
    while True:
        print("\n")
        if i == 0:
            print(f"Select your top job title you want and think you'd be good at:")
        elif i == 1:
            print(f"Select your 2nd top job title you want and think you'd be good at:")
        elif i == 2:
            print(f"Select your 3rd top job title you want and think you'd be good at:")
        else:
            print(f"Select your {i + 1}th top job title you want and think you'd be good at:")

        job = utils.display_scrollable_dropdown(sorted_job_titles, i)

        if job is not None:
            desired_jobs.append(job)
            i += 0
        else:
            break
    return job_titles, employment_change, desired_jobs
