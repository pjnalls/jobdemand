<div align="center">
    <img 
        alt="top jobs user picked and job demands" 
        src="results/screenshot.png" />
    <h1>
        Jobdemand
    </h1>
</div>
A Python console app and React Vite web app that generate charts showing the jobs users pick and their demand from 2023 to 2033.


## Prerequiste
Please ensure Python 3 is installed on your machine. You can verify with the following command:
```bash
python -V # => Python 3.x.x
```
If the `python` command isn't recognized, then you can download Python 3 [here](https://www.python.org/downloads/) and install it.

## Quick Setup
You can quickly create a local `.venv` virtual environment for this project with the dependencies needed with the following command:
```bash
source setup.sh
```

## Quick Run
You can quickly run the project, pick job titles, and generate your results with the following command:
```bash
source run.sh
```

## Specify Dataset to Run App Against
Please decide on a `.csv` file you want pick your job titles for and run the following command replacing `6.x` with `6.1`,`6.2`, or `6.3`:
```bash
python -m src.main "Table 6.x-Table 1.csv"
```

## Quick Build and Deploy
You can quickly build the `frontend/` Vite + React app with the following command:
```bash
souce rebuild.sh
```
Then, you can commit the newly created `assets/`, `index.html`, and `jobdemand.svg` created.

## Credit
`data/skills.xlsx` file is public data provided by the U.S. Bureau of Labor Statistics which you can download [here](https://www.bls.gov/emp/skills/skills.xlsx).