import { defineConfig,Plugin } from '52bot';
const test=()=>{
    return {
        name:'test',
        install(plugin:Plugin){
            plugin.command('foo')
                .action(()=>'bar')
        }
    }
}
export default defineConfig(({ mode }) => {
    return {
        plugins: [
            'commandParser',
            'hmr',
            'echo',
            'pluginManager',
            'testPlugin',
            test()
        ],
    };
});
