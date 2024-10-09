// @ts-nocheck
import { Telegraf, Markup } from "telegraf";
import { message } from "telegraf/filters";

const token = '7637617391:AAGw8fPec_X8_40NreZM3dq_QClW4CksCSc';

const webAppUrl = 'https://angular-tg-app-41c65.web.app';

const bot = new Telegraf(token);

bot.command('start', (ctx) => {
	ctx.reply(
		'Добро пожаловать! Нажмите на кнопку ниже, чтобы запустить приложение',
		Markup.keyboard([
			Markup.button.webApp(
				'Отправить соощение',
				`${webAppUrl}/feedback`
			)
		])
	);
});

bot.on(message('web_app_data'), async ctx => {
	const data = ctx.webAppData?.data.json();
	ctx.reply(`Ваше сообщение: ${data?.feedback}` ?? 'empty message');
});

bot.launch();