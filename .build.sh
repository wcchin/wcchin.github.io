echo "enter .poole_generator" &&
cd .poole_generator &&
echo "running poole generator" &&
python poole.py --build --output ../ &&
echo "back to main directory" &&
cd ../ &&
echo "prepare projects directory" &&
mkdir projects &&
echo "enter .ivy_generator " &&
cd .ivy_generator &&
echo "running ivy generator" &&
ivy build &&
echo "move projects html to projects directory" &&
cp out/* ../projects/ -R &&
echo "back to main directory" &&
cd ../ &&
python -m http.server
