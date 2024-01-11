import {App} from '52bot'
import * as testPlugin from './plugins/testPlugin.js'
const app=new App({
	logLevel:'info',
	configFile:'bot.config.js',
	adapters:['icqq'],
	pluginDirs:['plugins']
})
app
	.loadPlugin('echo')
	.loadPlugin('pluginManager')
	.loadPlugin('commandParser')
	.use(testPlugin)
	.start()
