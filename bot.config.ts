import { defineConfig } from '52bot';

export default defineConfig(({ mode }) => {
    return {
        plugins: [
            'commandParser',
            'hmr',
            'echo',
            'pluginManager',
            'testPlugin',
        ],
    };
});
