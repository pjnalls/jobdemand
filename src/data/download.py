import requests


def download_data(url: str, xlsx_file: str):
    response = requests.get(url)
    with open(xlsx_file, "wb") as file:
        file.write(response.content)


if __name__ == "__main__":
    download_data(
        "https://www.bls.gov/emp/skills/skills.xlsx",
        "data/skills.xlsx")
