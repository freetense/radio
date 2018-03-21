# radio




1) Ustanovka audio:
pip install pyglet

sudo apt-get install libavbin-dev libavbin0

sudo sh ./install-avbin-linux-x86-64-v10


2) Ustanovka osmocom sink:

git clone git://git.osmocom.org/gr-osmosdr
cd gr-osmosdr/
mkdir build
cd build/
cmake ../
make
sudo make install
sudo ldconfig
