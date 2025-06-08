import csv

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
    job_titles, employment_change = read_employment_change(
        file_path)
    sorted_job_titles = sorted(job_titles)

    desired_jobs = utils.display_scrollable_dropdown(sorted_job_titles)

    return job_titles, employment_change, desired_jobs
