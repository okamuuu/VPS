### 横幅、あるいは高さを500
BEFORE=$1
AFTER=${1%.png}.resized.png
sips -Z 500 ${BEFORE} --out ${AFTER}
sips -g pixelHeight -g pixelWidth ${AFTER}
