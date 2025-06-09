rm -rf assets
rm -rf index.html
rm -rf *.svg
cd frontend && npm run build
mv dist/assets ../assets
mv dist/index.html ../index.html
mv dist/jobdemand.svg ../jobdemand.svg
cd ..
