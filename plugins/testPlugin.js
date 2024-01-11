import {Plugin} from "52bot";
export const name='测试插件'
/**
 * 安装测试插件
 * @param plugin {Plugin}
 */
export function install(plugin){
	plugin.command('test')
		.desc('hello world')
		.action(()=>'hello world')
}
