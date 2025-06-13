download:
	python -m src.data.download

preprocess:
	python -m src.preprocess.dataset

clean-data:
	rm -rf data/data.xlsx

clean-results:
	rm -rf results/results.png

clean-pycache:
	rm -rf */__pycache__

clean-all: clean-data clean-results clean-pycache
