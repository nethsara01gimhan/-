FROM nethsaragimhan/kingbotmd:latest

RUN git clone https://github.com/nethsara01gimhan/KING-BOT-MD-TEST /root/KING-BOT-MD-TEST
WORKDIR /root/KING-BOT-MD-TEST/
RUN git clone https://github.com/nethsara01gimhan/KING-BOT-MD-TEST
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
