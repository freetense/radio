# radio




## 1) Ustanovka audio:
<br>
pip install pyglet
<br>
sudo apt-get install libavbin-dev libavbin0
<br>
sudo sh ./install-avbin-linux-x86-64-v10
<br><br>

## 2) Ustanovka osmocom sink:
<br>
git clone git://git.osmocom.org/gr-osmosdr
<br>
cd gr-osmosdr/
<br>
mkdir build
<br>
cd build/
<br>
cmake ../
<br>
make
<br>
sudo make install
<br>
sudo ldconfig
