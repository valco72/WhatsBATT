FROM fusuf/whatsasena:latest

RUN git clone https://github.com/valco72/WhatsBATT /root/WhatsBAT
WORKDIR /root/WhatsBAT/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
