import src.preprocess.dataset as preprocess


def calculate_job_demand_for_user(file_path: str) -> tuple[list[str], list[float]]:
    job_titles, employment_change, desired_jobs = preprocess.get_top_jobs_of_user(
        file_path)

    x = []
    for i in range(len(desired_jobs)):
        if i == 0:
            x.append(f"Top: {desired_jobs[i]}")
        elif i == 1:
            x.append(f"2nd: {desired_jobs[i]}")
        elif i == 2:
            x.append(f"3rd: {desired_jobs[i]}")
        else:
            x.append(f"{i + 1}th: {desired_jobs[i]}")
    y = []
    for title in desired_jobs:
        if title in job_titles:
            y.append(float(employment_change[job_titles.index(title)]))
        else:
            y.append(0)

    return x, y
